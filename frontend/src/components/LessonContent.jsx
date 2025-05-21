/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const LessonContent = ({ content, loading, currentLanguage = 'en' }) => {
  const [processedContent, setProcessedContent] = useState('');
  const [contentSections, setContentSections] = useState([]);

  useEffect(() => {
    if (content) {
      // Process the content to extract sections for better navigation
      const sections = extractSections(content);
      setContentSections(sections);
      setProcessedContent(content);
    }
  }, [content]);

  const extractSections = (markdownContent) => {
    const lines = markdownContent.split('\n');
    const sections = [];
    let currentSection = null;

    lines.forEach((line, index) => {
      // Match headings (# ## ### etc.)
      const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const title = headingMatch[2];
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        if (currentSection) {
          sections.push(currentSection);
        }
        
        currentSection = { id, title, level, startLine: index };
      }
    });
    
    if (currentSection) {
      sections.push(currentSection);
    }
    
    return sections;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom components for ReactMarkdown
  const markdownComponents = {
    // Custom heading renderer with anchor links
    h1: ({ node, children, ...props }) => {
      const id = children[0]?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return (
        <h1 id={id} className="text-3xl font-bold text-gray-900 mb-6 mt-8 pb-2 border-b border-gray-200" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ node, children, ...props }) => {
      const id = children[0]?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return (
        <h2 id={id} className="text-2xl font-semibold text-gray-800 mb-4 mt-8" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      const id = children[0]?.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return (
        <h3 id={id} className="text-xl font-semibold text-gray-800 mb-3 mt-6" {...props}>
          {children}
        </h3>
      );
    },
    h4: ({ node, children, ...props }) => (
      <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4" {...props}>
        {children}
      </h4>
    ),
    
    // Custom paragraph styling
    p: ({ node, children, ...props }) => (
      <p className="text-gray-700 leading-relaxed mb-4 text-base" {...props}>
        {children}
      </p>
    ),
    
    // Custom list styling
    ul: ({ node, children, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props}>
        {children}
      </ul>
    ),
    ol: ({ node, children, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props}>
        {children}
      </ol>
    ),
    li: ({ node, children, ...props }) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    
    // Custom code block with syntax highlighting
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      if (!inline && language) {
        return (
          <div className="mb-6">
            <div className="bg-gray-800 text-gray-200 px-4 py-2 text-sm font-medium rounded-t-lg">
              {language.toUpperCase()}
            </div>
            <SyntaxHighlighter
              style={tomorrow}
              language={language}
              PreTag="div"
              className="rounded-b-lg border border-t-0 border-gray-200"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
        );
      }
      
      return (
        <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    },
    
    // Custom blockquote styling
    blockquote: ({ node, children, ...props }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4 bg-blue-50 py-2" {...props}>
        {children}
      </blockquote>
    ),
    
    // Custom table styling
    table: ({ node, children, ...props }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg" {...props}>
          {children}
        </table>
      </div>
    ),
    thead: ({ node, children, ...props }) => (
      <thead className="bg-gray-50" {...props}>
        {children}
      </thead>
    ),
    th: ({ node, children, ...props }) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" {...props}>
        {children}
      </th>
    ),
    td: ({ node, children, ...props }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b border-gray-200" {...props}>
        {children}
      </td>
    ),
    
    // Custom link styling
    a: ({ node, children, href, ...props }) => (
      <a 
        href={href} 
        className="text-blue-600 hover:text-blue-800 underline font-medium"
        target="_blank" 
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    
    // Custom image handling
    img: ({ node, src, alt, ...props }) => (
      <div className="mb-6">
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full h-auto rounded-lg shadow-md mx-auto"
          {...props}
        />
        {alt && (
          <p className="text-center text-sm text-gray-500 mt-2 italic">{alt}</p>
        )}
      </div>
    ),
    
    // Custom horizontal rule
    hr: ({ node, ...props }) => (
      <hr className="my-8 border-t-2 border-gray-200" {...props} />
    ),
    
    // Custom strong/bold text
    strong: ({ node, children, ...props }) => (
      <strong className="font-semibold text-gray-900" {...props}>
        {children}
      </strong>
    ),
    
    // Custom emphasis/italic text
    em: ({ node, children, ...props }) => (
      <em className="italic text-gray-700" {...props}>
        {children}
      </em>
    )
  };

  if (loading) {
    return (
      <div className="animate-pulse max-w-4xl">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="space-y-3 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="space-y-3 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
        
        <div className="h-32 bg-gray-200 rounded mb-6"></div>
        
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-8 max-w-full">
      {/* Table of Contents - Sticky Sidebar */}
      {contentSections.length > 0 && (
        <div className="w-64 flex-shrink-0 hidden lg:block">
          <div className="sticky top-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {contentSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-2 py-1 text-sm rounded transition-colors hover:bg-gray-100 ${
                      section.level === 1 ? 'font-medium text-gray-900' : 
                      section.level === 2 ? 'ml-3 text-gray-700' : 
                      'ml-6 text-gray-600'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={markdownComponents}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            className="markdown-content"
          >
            {processedContent}
          </ReactMarkdown>
        </article>
        
        {/* Interactive Elements */}
        <div className="mt-12 space-y-6">
          {/* Knowledge Check Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Knowledge Check</h3>
            </div>
            
            <p className="text-blue-800 mb-6">Test your understanding of this lesson:</p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200 hover:border-blue-300 transition-colors">
                <label className="flex items-start cursor-pointer">
                  <input type="radio" name="quiz" className="h-4 w-4 text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="text-gray-800 font-medium">Option A:</span>
                    <span className="text-gray-700 ml-2">Web development only involves frontend technologies</span>
                  </div>
                </label>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200 hover:border-blue-300 transition-colors">
                <label className="flex items-start cursor-pointer">
                  <input type="radio" name="quiz" className="h-4 w-4 text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="text-gray-800 font-medium">Option B:</span>
                    <span className="text-gray-700 ml-2">HTML, CSS, and JavaScript are the three core technologies of web development</span>
                  </div>
                </label>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200 hover:border-blue-300 transition-colors">
                <label className="flex items-start cursor-pointer">
                  <input type="radio" name="quiz" className="h-4 w-4 text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="text-gray-800 font-medium">Option C:</span>
                    <span className="text-gray-700 ml-2">CSS is used for database management in web applications</span>
                  </div>
                </label>
              </div>
            </div>
            
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Check Answer
            </button>
          </div>
          
          {/* Key Takeaways Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-900">Key Takeaways</h3>
            </div>
            
            <ul className="space-y-3 text-green-800">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Web development encompasses both frontend and backend technologies
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                HTML provides structure, CSS handles styling, and JavaScript adds interactivity
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Responsive design ensures websites work across all devices
              </li>
            </ul>
          </div>
          
          {/* Practice Exercise */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-purple-900">Practice Exercise</h3>
            </div>
            
            <p className="text-purple-800 mb-4">Try building a simple HTML page using the concepts you've learned:</p>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <textarea
                placeholder="Write your HTML code here..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md text-sm font-mono focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-600">HTML Practice</span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  Run Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;