import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import CourseMenu from '../components/CourseMenu';
import LessonContent from '../components/LessonContent';
import LanguageSelector from '../components/LanguageSelector';
import AudioPlayer from '../components/AudioPlayer';

const LearningPage = () => {
  const { courseId, lessonId } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [translatedContent, setTranslatedContent] = useState('');
  const [courseProgress, setCourseProgress] = useState(0);

  // Mock course data - fetch this from an API, when it is ready
  const courseData = {
    id: courseId,
    title: 'Introduction to Web development : HTML, CSS and Javascript',
    totalPoints: 150,
    earnedPoints: 45,
    progress: 30, // percentage
    modules: [
      {
        id: 'm1',
        title: 'WEEK 1: Introduction to web development',
        lessons: [
          { 
            id: 'l1', 
            title: 'Introduction to Responsive design', 
            completed: true,
            points: 10,
            content: 'Web development is the process of creating and maintaining websites...'
          },
          { 
            id: 'l2', 
            title: 'HTML Basics', 
            completed: true,
            points: 15,
            content: 'HTML (HyperText Markup Language) is the standard markup language...'
          },
          { 
            id: 'l3', 
            title: 'CSS Fundamentals', 
            completed: false,
            points: 20,
            content: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe...'
          },
          // More lessons...
        ]
      },
      // More modules...
    ]
  };

  // Find current lesson from URL params
  useEffect(() => {
    const findLesson = () => {
      for (const module of courseData.modules) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) {
          setCurrentLesson({...lesson, moduleTitle: module.title});
          break;
        }
      }
    };
    
    findLesson();
    
    // Calculate progress based on completed lessons
    const calculateProgress = () => {
      let completed = 0;
      let total = 0;
      
      courseData.modules.forEach(module => {
        module.lessons.forEach(lesson => {
          total++;
          if (lesson.completed) completed++;
        });
      });
      
      setCourseProgress(Math.round((completed / total) * 100));
    };
    
    calculateProgress();
  }, [courseId, lessonId]);

  // Simulate translation API call
  useEffect(() => {
    if (currentLesson && currentLanguage !== 'en') {
      // In a real app, call your translation API here
      const translateContent = async () => {
        // Simulate API delay
        setTimeout(() => {
          setTranslatedContent(`[Translated to ${currentLanguage}] ${currentLesson.content}`);
        }, 500);
      };
      
      translateContent();
    } else if (currentLesson) {
      setTranslatedContent(currentLesson.content);
    }
  }, [currentLesson, currentLanguage]);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  const handleAudioToggle = () => {
    setIsAudioPlaying(!isAudioPlaying);
    // In a real app, this would trigger the TTS API
  };

  const navigateToLesson = (lessonId) => {
    // In a real app, use react-router navigation
    console.log(`Navigating to lesson ${lessonId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigation />
        
        {/* Learning Page Content */}
        <div className="flex flex-1">
          {/* Course Menu - Left Sidebar */}
          <div className="w-64 border-r border-gray-200 bg-white">
            <CourseMenu 
              modules={courseData.modules} 
              currentLessonId={lessonId}
              onLessonSelect={navigateToLesson}
            />
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Controls */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h1 className="text-xl font-semibold">
                {currentLesson?.title || 'Loading...'}
              </h1>
              
              <div className="flex items-center space-x-4">
                <LanguageSelector 
                  currentLanguage={currentLanguage}
                  onLanguageChange={handleLanguageChange}
                />
                
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-semibold text-blue-600">{courseData.earnedPoints}</span>
                </div>
                
                <div className="relative h-16 w-16">
                  <svg viewBox="0 0 36 36" className="h-16 w-16 transform -rotate-90">
                    {/* Background circle */}
                    <circle 
                      cx="18" cy="18" r="16" 
                      fill="none" 
                      stroke="#e5e7eb" 
                      strokeWidth="3"
                    />
                    {/* Progress circle */}
                    <circle 
                      cx="18" cy="18" r="16" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="3"
                      strokeDasharray={`${courseProgress} 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-medium">{courseProgress}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lesson Content */}
            <div className="flex-1 p-6 overflow-auto">
              <LessonContent 
                content={translatedContent} 
                loading={!currentLesson}
              />
            </div>
            
            {/* Bottom Controls */}
            <div className="p-4 border-t border-gray-200 flex justify-between items-center">
              <AudioPlayer 
                isPlaying={isAudioPlaying}
                onToggle={handleAudioToggle}
              />
              
              <div className="flex space-x-4">
                <button 
                  className="px-4 py-2 border border-gray-300 rounded"
                  onClick={() => console.log('Previous chapter')}
                >
                  Previous
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={() => console.log('Next chapter')}
                >
                  Next Chapter
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Leader Board (optional) */}
          <div className="w-64 border-l border-gray-200 bg-white p-4">
            <h3 className="font-semibold mb-4">Leader Board</h3>
            {/* Leader board content */}
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>David</span>
                <span className="font-medium">120 pts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sarah</span>
                <span className="font-medium">110 pts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Michael</span>
                <span className="font-medium">95 pts</span>
              </li>
              {/* More leaderboard entries */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;