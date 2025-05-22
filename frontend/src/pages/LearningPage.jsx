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

  // Mock course data with rich content
  const courseData = {
    id: courseId,
    title: 'Introduction to Web Development: HTML, CSS and Javascript',
    totalPoints: 150,
    earnedPoints: 45,
    progress: 30,
    modules: [
      {
        id: 'm1',
        title: 'WEEK 1: Introduction to web development',
        lessons: [
          { 
            id: 'l1', 
            title: 'Introduction to Responsive design', 
            completed: false,
            points: 10,
            content: `# Introduction to Web Development

Welcome to the exciting world of web development! In this comprehensive lesson, you'll learn the fundamental building blocks that power the modern web.

## What is Web Development?

Web development is the **process of creating and maintaining websites**. It encompasses everything from simple static pages to complex web applications that millions of people use daily.

Modern web development requires understanding multiple technologies working together. Let's explore the core concepts that every developer should master.

## Core Technologies

### HTML (HyperText Markup Language)
HTML provides the structure and content of web pages. Think of it as the skeleton of a website - it defines what content appears and how it's organized.

### CSS (Cascading Style Sheets)  
CSS handles the visual presentation of web pages. It controls colors, fonts, layouts, animations, and responsive design.

### JavaScript
JavaScript adds interactivity and dynamic behavior to websites. It's what makes pages respond to user actions and creates engaging experiences.

## Why Responsive Design Matters

Responsive design ensures your websites work perfectly across all devices - from smartphones to desktop computers. With mobile traffic accounting for over 50% of web usage, this skill is essential for modern developers.

Key principles include:
- Mobile-first approach
- Flexible grid systems
- Scalable images and media
- CSS media queries
- Touch-friendly interfaces

## Getting Started

In the following lessons, we'll build practical projects that demonstrate these concepts. You'll create your first responsive webpage and learn industry best practices.

Remember: the best way to learn web development is through hands-on practice and experimentation!`,
            quiz: {
              question: "What percentage of web traffic comes from mobile devices?",
              options: ["Around 30%", "Over 50%", "Less than 25%", "Exactly 40%"],
              correct: 1,
              explanation: "Mobile devices account for over 50% of global web traffic, making responsive design crucial."
            }
          },
          { 
            id: 'l2', 
            title: 'HTML Document Structure', 
            completed: false,
            points: 15,
            content: `# HTML Document Structure

Every HTML document follows a standard structure that browsers understand. Let's break down the essential components.

## Basic HTML Template

Every HTML page starts with this foundation:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
\`\`\`

## Understanding Each Part

### DOCTYPE Declaration
The \`<!DOCTYPE html>\` tells the browser this is an HTML5 document. Always include this at the very top.

### HTML Element
The \`<html>\` element wraps all content. The \`lang="en"\` attribute helps screen readers and search engines understand the language.

### Head Section
The \`<head>\` contains metadata about your page:
- **Meta charset**: Ensures proper character encoding
- **Viewport meta**: Essential for responsive design
- **Title**: Appears in browser tabs and search results

### Body Section
The \`<body>\` contains all visible content that users will see and interact with.

## Semantic HTML Elements

Modern HTML emphasizes semantic meaning:

- \`<header>\` - Page or section header
- \`<nav>\` - Navigation links
- \`<main>\` - Primary content
- \`<article>\` - Standalone content
- \`<section>\` - Thematic groupings
- \`<aside>\` - Sidebar content
- \`<footer>\` - Page or section footer

Using semantic elements improves accessibility and SEO while making your code more readable.

## Best Practices

1. **Always include the DOCTYPE**
2. **Use semantic elements appropriately**
3. **Include proper meta tags**
4. **Validate your HTML regularly**
5. **Keep your structure logical and nested properly**

Next, we'll explore how to style this structure with CSS!`,
            quiz: {
              question: "Which meta tag is essential for responsive design?",
              options: ["charset", "viewport", "description", "keywords"],
              correct: 1,
              explanation: "The viewport meta tag controls how the page is displayed on mobile devices."
            }
          },
          { 
            id: 'l3', 
            title: 'CSS Fundamentals', 
            completed: false,
            points: 20,
            content: `# CSS Fundamentals

CSS (Cascading Style Sheets) transforms plain HTML into beautiful, professional websites. Let's explore the core concepts.

## CSS Syntax

CSS follows a simple pattern:

\`\`\`css
selector {
    property: value;
    another-property: another-value;
}
\`\`\`

## Types of Selectors

### Element Selectors
Target HTML elements directly:
\`\`\`css
h1 { color: blue; }
p { font-size: 16px; }
\`\`\`

### Class Selectors
Target elements with specific classes:
\`\`\`css
.highlight { background-color: yellow; }
.button { padding: 10px 20px; }
\`\`\`

### ID Selectors
Target unique elements:
\`\`\`css
#header { background-color: navy; }
#main-content { max-width: 1200px; }
\`\`\`

## The Box Model

Every element is a rectangular box with:
- **Content**: The actual content (text, images)
- **Padding**: Space inside the element
- **Border**: The edge of the element
- **Margin**: Space outside the element

## Layout Methods

### Flexbox
Perfect for one-dimensional layouts:
\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
\`\`\`

### Grid
Ideal for two-dimensional layouts:
\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
\`\`\`

## Responsive Design with Media Queries

Make your designs adapt to different screen sizes:

\`\`\`css
/* Mobile styles */
.container { width: 100%; }

/* Tablet and up */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container { width: 1000px; }
}
\`\`\`

## Best Practices

1. **Use external stylesheets**
2. **Follow naming conventions**
3. **Group related styles**
4. **Comment your code**
5. **Test across different browsers**
6. **Optimize for performance**

CSS is incredibly powerful - master these fundamentals and you'll be able to create stunning designs!`
            }
          }
        ]
      }
    ]
  };

  // Find current lesson and navigation
  useEffect(() => {
    const findLesson = () => {
      if (!lessonId) {
        const firstLesson = courseData.modules[0]?.lessons[0];
        if (firstLesson) {
          setCurrentLesson({...firstLesson, moduleTitle: courseData.modules[0].title});
        }
        return;
      }
      
      for (const module of courseData.modules) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) {
          setCurrentLesson({...lesson, moduleTitle: module.title});
          break;
        }
      }
    };
    
    findLesson();
  }, [courseId, lessonId]);

  // Load saved progress from localStorage (later replace with API)
  useEffect(() => {
    const savedCompletedLessons = JSON.parse(localStorage.getItem(`completed_${courseId}`) || '[]');
    const savedHighlights = JSON.parse(localStorage.getItem(`highlights_${courseId}`) || '[]');
    const savedNotes = JSON.parse(localStorage.getItem(`notes_${courseId}`) || '[]');
    
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

  // Navigation functions
  const getAllLessons = () => {
    return courseData.modules.flatMap(module => 
      module.lessons.map(lesson => ({...lesson, moduleTitle: module.title}))
    );
  };

  const getCurrentLessonIndex = () => {
    const allLessons = getAllLessons();
    return allLessons.findIndex(lesson => lesson.id === currentLesson?.id);
  };

  const goToNextLesson = () => {
    const allLessons = getAllLessons();
    const currentIndex = getCurrentLessonIndex();
    if (currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      navigate(`/learn/${courseId}/lesson/${nextLesson.id}`);
    }
  };

  const goToPreviousLesson = () => {
    const allLessons = getAllLessons();
    const currentIndex = getCurrentLessonIndex();
    if (currentIndex > 0) {
      const prevLesson = allLessons[currentIndex - 1];
      navigate(`/learn/${courseId}/lesson/${prevLesson.id}`);
    }
  };

  const markLessonComplete = () => {
    if (currentLesson && !completedLessons.includes(currentLesson.id)) {
      const newCompleted = [...completedLessons, currentLesson.id];
      setCompletedLessons(newCompleted);
      localStorage.setItem(`completed_${courseId}`, JSON.stringify(newCompleted));
    }
  };

  const isFirstLesson = getCurrentLessonIndex() === 0;
  const isLastLesson = getCurrentLessonIndex() === getAllLessons().length - 1;
  const isCompleted = completedLessons.includes(currentLesson?.id);

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
  )
}

export default LearningPage;