/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import HighlightManager from './HighlightManager';
import QuizCard from './QuizCard';
import GlossaryTooltip from './GlossaryTooltip';

const LessonContent = ({ 
  lesson, 
  fontSize, 
  darkMode, 
  searchTerm, 
  highlights,
  notes,
  onHighlight,
  onNote,
  onProgressUpdate 
}) => {
  const contentRef = useRef(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [selectionPosition, setSelectionPosition] = useState(null);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = Math.min((scrollTop + clientHeight) / scrollHeight * 100, 100);
        onProgressUpdate(progress);
      }
    };

    const element = contentRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [onProgressUpdate]);

  // Handle text selection for highlighting
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectedText(selection.toString());
        setSelectionPosition({
          top: rect.top - 40,
          left: rect.left + (rect.width / 2)
        });
      } else {
        setSelectedText('');
        setSelectionPosition(null);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, []);

  // Glossary terms (would come from backend)
  const glossaryTerms = {
    'HTML': 'HyperText Markup Language - the standard markup language for creating web pages',
    'CSS': 'Cascading Style Sheets - used for describing the presentation of a document written in HTML',
    'JavaScript': 'A programming language that enables interactive web pages and is an essential part of web applications',
    'responsive design': 'An approach to web design that makes web pages render well on a variety of devices and window sizes',
    'semantic': 'HTML elements that clearly describe their meaning in a human- and machine-readable way'
  };

  // Highlight search terms in content
  const highlightSearchTerms = (text) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, `<mark class="bg-yellow-300 dark:bg-yellow-600">$1</mark>`);
  };

  // Custom markdown components with enhanced features
  const markdownComponents = {
    h1: ({ node, children, ...props }) => (
      <h1 className={`text-3xl font-bold mb-6 mt-8 pb-2 border-b ${
        darkMode ? 'text-gray-100 border-gray-700' : 'text-gray-900 border-gray-200'
      }`} {...props}>
        {children}
      </h1>
    ),
    h2: ({ node, children, ...props }) => (
      <h2 className={`text-2xl font-semibold mb-4 mt-8 ${
        darkMode ? 'text-gray-200' : 'text-gray-800'
      }`} {...props}>
        {children}
      </h2>
    ),
    h3: ({ node, children, ...props }) => (
      <h3 className={`text-xl font-semibold mb-3 mt-6 ${
        darkMode ? 'text-gray-200' : 'text-gray-800'
      }`} {...props}>
        {children}
      </h3>
    ),
    p: ({ node, children, ...props }) => (
      <p className={`leading-relaxed mb-4 ${fontSize} ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`} {...props}>
        {children}
      </p>
    ),
    ul: ({ node, children, ...props }) => (
      <ul className={`list-disc list-inside mb-4 space-y-2 ${fontSize} ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`} {...props}>
        {children}
      </ul>
    ),
    ol: ({ node, children, ...props }) => (
      <ol className={`list-decimal list-inside mb-4 space-y-2 ${fontSize} ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`} {...props}>
        {children}
      </ol>
    ),
    li: ({ node, children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      if (!inline && language) {
        return (
          <div className="mb-6">
            <div className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              darkMode 
                ? 'bg-gray-700 text-gray-200' 
                : 'bg-gray-800 text-gray-200'
            }`}>
              {language.toUpperCase()}
            </div>
            <SyntaxHighlighter
              style={tomorrow}
              language={language}
              PreTag="div"
              className="rounded-b-lg border border-t-0 border-gray-200 dark:border-gray-700"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
        );
      }
      
      return (
        <code className={`px-1.5 py-0.5 rounded text-sm font-mono ${
          darkMode 
            ? 'bg-gray-700 text-red-400' 
            : 'bg-gray-100 text-red-600'
        }`} {...props}>
          {children}
        </code>
      );
    },
    blockquote: ({ node, children, ...props }) => (
      <blockquote className={`border-l-4 border-blue-500 pl-4 italic mb-4 py-2 ${
        darkMode 
          ? 'text-gray-400 bg-blue-900/20' 
          : 'text-gray-600 bg-blue-50'
      }`} {...props}>
        {children}
      </blockquote>
    ),
    strong: ({ node, children, ...props }) => (
      <GlossaryTooltip 
        text={children[0]} 
        definition={glossaryTerms[children[0]?.toLowerCase()]}
        darkMode={darkMode}
      >
        <strong className={`font-semibold ${
          darkMode ? 'text-gray-100' : 'text-gray-900'
        }`} {...props}>
          {children}
        </strong>
      </GlossaryTooltip>
    ),
    a: ({ node, children, href, ...props }) => (
      <a 
        href={href} 
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium"
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  };

  if (!lesson) {
    return (
      <div className={`flex-1 p-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="animate-pulse space-y-6">
          <div className={`h-8 rounded w-3/4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          <div className="space-y-3">
            <div className={`h-4 rounded w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className={`h-4 rounded w-5/6 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className={`h-4 rounded w-4/6 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={contentRef}
      className={`flex-1 overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto p-8">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className={`text-sm font-medium mb-2 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {lesson.moduleTitle}
          </div>
          <h1 className={`text-3xl font-bold ${
            darkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {lesson.title}
          </h1>
        </div>

        {/* Main Content */}
        <HighlightManager
          highlights={highlights}
          onHighlight={onHighlight}
          darkMode={darkMode}
        >
          <article className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
            <ReactMarkdown
              components={markdownComponents}
              remarkPlugins={[remarkGfm, remarkBreaks]}
            >
              {lesson.content}
            </ReactMarkdown>
          </article>
        </HighlightManager>

        {/* Quiz Section */}
        {lesson.quiz && (
          <div className="mt-12">
            <QuizCard 
              quiz={lesson.quiz}
              darkMode={darkMode}
              onComplete={() => setShowQuiz(false)}
            />
          </div>
        )}

        {/* Highlight Selection Toolbar */}
        {selectedText && selectionPosition && (
          <div 
            className={`fixed z-50 flex items-center space-x-2 px-3 py-2 rounded-lg shadow-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
            style={{
              top: selectionPosition.top,
              left: selectionPosition.left - 60,
              transform: 'translateX(-50%)'
            }}
          >
            <button
              onClick={() => {
                onHighlight({
                  id: Date.now(),
                  text: selectedText,
                  color: 'yellow',
                  timestamp: new Date()
                });
                setSelectedText('');
                setSelectionPosition(null);
              }}
              className={`p-1 rounded hover:bg-yellow-100 ${
                darkMode ? 'hover:bg-yellow-900' : ''
              }`}
              title="Highlight"
            >
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                const note = prompt('Add a note:', '');
                if (note) {
                  onNote({
                    id: Date.now(),
                    text: selectedText,
                    note: note,
                    timestamp: new Date()
                  });
                }
                setSelectedText('');
                setSelectionPosition(null);
              }}
              className={`p-1 rounded hover:bg-blue-100 ${
                darkMode ? 'hover:bg-blue-900' : ''
              }`}
              title="Add Note"
            >
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonContent;