import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import LessonContent from '../components/LessonContent';
import ProgressBar from '../components/ProgressBar';
import TableOfContents from '../components/TableOfContents';
import LearningControls from '../components/LearningControls';
import NavigationButtons from '../components/NavigationButtons';
import CompletionTracker from '../components/CompletionTracker';
import SearchBar from '../components/SearchBar';
import { 
  getCourseById, 
  getAllLessons, 
  getLessonById, 
  getNextLesson, 
  getPreviousLesson,
  glossaryTerms 
} from '../data/CourseData';

const LearningPage = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  
  // Learning preferences state
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('text-base');
  const [readingProgress, setReadingProgress] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlights, setHighlights] = useState([]);
  const [notes, setNotes] = useState([]);
  const [courseData, setCourseData] = useState(null);

  // Load course data from data file
  useEffect(() => {
    const course = getCourseById(courseId);
    setCourseData(course);
  }, [courseId]);

  // Find current lesson and navigation
  useEffect(() => {
    if (!courseData) return;
    
    const findLesson = () => {
      if (!lessonId) {
        // If no lesson ID, navigate to first lesson
        const firstLesson = courseData.modules[0]?.lessons[0];
        if (firstLesson) {
          setCurrentLesson({
            ...firstLesson, 
            moduleTitle: courseData.modules[0].title
          });
        }
        return;
      }
      
      // Find lesson by ID using data file function
      const lesson = getLessonById(courseId, lessonId);
      if (lesson) {
        setCurrentLesson(lesson);
      }
    };
    
    findLesson();
  }, [courseId, lessonId, courseData]);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedCompletedLessons = JSON.parse(
      localStorage.getItem(`completed_${courseId}`) || '[]'
    );
    const savedHighlights = JSON.parse(
      localStorage.getItem(`highlights_${courseId}`) || '[]'
    );
    const savedNotes = JSON.parse(
      localStorage.getItem(`notes_${courseId}`) || '[]'
    );
    
    setCompletedLessons(savedCompletedLessons);
    setHighlights(savedHighlights);
    setNotes(savedNotes);
  }, [courseId]);

  // Save progress to localStorage
  const saveProgress = () => {
    localStorage.setItem(`completed_${courseId}`, JSON.stringify(completedLessons));
    localStorage.setItem(`highlights_${courseId}`, JSON.stringify(highlights));
    localStorage.setItem(`notes_${courseId}`, JSON.stringify(notes));
  };

  // Mark lesson as complete
  const markLessonComplete = () => {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
      const newCompleted = [...completedLessons, currentLesson.id];
      setCompletedLessons(newCompleted);
      localStorage.setItem(`completed_${courseId}`, JSON.stringify(newCompleted));
    }
  };

  // Navigation functions using data file functions
  const goToNextLesson = () => {
    const nextLesson = getNextLesson(courseId, currentLesson?.id);
    if (nextLesson) {
      navigate(`/learn/${courseId}/lesson/${nextLesson.id}`);
    }
  };

  const goToPreviousLesson = () => {
    const prevLesson = getPreviousLesson(courseId, currentLesson?.id);
    if (prevLesson) {
      navigate(`/learn/${courseId}/lesson/${prevLesson.id}`);
    }
  };

  // Navigation state
  const isFirstLesson = !getPreviousLesson(courseId, currentLesson?.id);
  const isLastLesson = !getNextLesson(courseId, currentLesson?.id);
  const isCompleted = completedLessons.includes(currentLesson?.id);

  // Don't render until course data is loaded
  if (!courseData) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigation />
        
        {/* Progress Bar */}
        <ProgressBar progress={readingProgress} />
        
        {/* Learning Content */}
        <div className="flex flex-1">
          {/* Table of Contents */}
          <TableOfContents 
            modules={courseData.modules}
            currentLessonId={currentLesson?.id}
            completedLessons={completedLessons}
            onLessonSelect={(lessonId) => navigate(`/learn/${courseId}/lesson/${lessonId}`)}
            darkMode={darkMode}
          />
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Controls Bar */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4">
                <SearchBar 
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  darkMode={darkMode}
                />
                <CompletionTracker 
                  isCompleted={isCompleted}
                  onMarkComplete={markLessonComplete}
                  points={currentLesson?.points || 0}
                />
              </div>
              
              <LearningControls 
                darkMode={darkMode}
                onDarkModeToggle={() => setDarkMode(!darkMode)}
                fontSize={fontSize}
                onFontSizeChange={setFontSize}
                currentLanguage="en"
                onLanguageChange={() => {}} // Placeholder for now
              />
            </div>
            
            {/* Lesson Content */}
            <div className="flex-1 overflow-auto">
              <LessonContent 
                lesson={currentLesson}
                fontSize={fontSize}
                darkMode={darkMode}
                searchTerm={searchTerm}
                highlights={highlights}
                notes={notes}
                onHighlight={(highlight) => {
                  const newHighlights = [...highlights, highlight];
                  setHighlights(newHighlights);
                  saveProgress();
                }}
                onNote={(note) => {
                  const newNotes = [...notes, note];
                  setNotes(newNotes);
                  saveProgress();
                }}
                onProgressUpdate={setReadingProgress}
              />
            </div>
            
            {/* Navigation Footer */}
            <NavigationButtons 
              onPrevious={goToPreviousLesson}
              onNext={goToNextLesson}
              isFirstLesson={isFirstLesson}
              isLastLesson={isLastLesson}
              currentLesson={currentLesson}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;