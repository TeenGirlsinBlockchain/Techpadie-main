// Mock course data - replace with API calls later
export const courseData = {
  1: {
    id: '1',
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

CSS is incredibly powerful - master these fundamentals and you'll be able to create stunning designs!`,
            quiz: {
              question: "Which CSS layout method is best for two-dimensional layouts?",
              options: ["Flexbox", "Grid", "Float", "Position"],
              correct: 1,
              explanation: "CSS Grid is specifically designed for two-dimensional layouts, while Flexbox is better for one-dimensional layouts."
            }
          }
        ]
      },
      {
        id: 'm2',
        title: 'WEEK 2: Advanced CSS Techniques',
        lessons: [
          {
            id: 'l4',
            title: 'CSS Grid Layout',
            completed: false,
            points: 25,
            content: `# CSS Grid Layout

CSS Grid is the most powerful layout system available in CSS. It's a two-dimensional system, meaning it can handle both columns and rows.

## Grid Container Basics

To start using Grid, you need to declare a grid container:

\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
    gap: 20px;
}
\`\`\`

## Flexible Grid Tracks

Use the \`fr\` unit to create flexible track sizes:

\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
    grid-template-rows: auto;
}
\`\`\`

## Grid Areas

Name your grid areas for easier layout management:

\`\`\`css
.grid-container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
    gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Grid Layouts

Create responsive layouts without media queries:

\`\`\`css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
\`\`\`

Grid revolutionizes how we think about web layouts!`,
            quiz: {
              question: "What does the 'fr' unit represent in CSS Grid?",
              options: ["Pixels", "Percentage", "Fractional unit", "Fixed ratio"],
              correct: 2,
              explanation: "The 'fr' unit represents a fractional unit that distributes available space proportionally."
            }
          }
        ]
      }
    ]
  },
  
  2: {
    id: '2',
    title: 'Introduction to Social Media Management and Growth Ads',
    totalPoints: 120,
    earnedPoints: 0,
    progress: 0,
    modules: [
      {
        id: 'm1',
        title: 'WEEK 1: Social Media Fundamentals',
        lessons: [
          {
            id: 'l1',
            title: 'Understanding Social Media Platforms',
            completed: false,
            points: 15,
            content: `# Understanding Social Media Platforms

Social media has transformed how businesses connect with their audiences. Each platform has its unique characteristics and best practices.

## Major Social Media Platforms

### Facebook
- **Audience**: Broad demographic, strong in 25-54 age group
- **Content Types**: Posts, photos, videos, stories, live streams
- **Best For**: Community building, customer service, detailed targeting

### Instagram
- **Audience**: Younger demographic, visual-focused
- **Content Types**: Photos, videos, stories, reels, IGTV
- **Best For**: Brand awareness, lifestyle content, influencer marketing

### Twitter
- **Audience**: News-focused, professionals, thought leaders
- **Content Types**: Tweets, threads, images, videos
- **Best For**: Real-time engagement, customer service, thought leadership

### LinkedIn
- **Audience**: Professionals, B2B decision makers
- **Content Types**: Professional posts, articles, company updates
- **Best For**: B2B marketing, professional networking, recruitment

### TikTok
- **Audience**: Gen Z and younger millennials
- **Content Types**: Short-form videos, trends, challenges
- **Best For**: Viral content, brand awareness, reaching younger audiences

## Platform Selection Strategy

Choose platforms based on:
1. **Target audience demographics**
2. **Content type and format**
3. **Business objectives**
4. **Available resources**
5. **Industry relevance**

## Content Adaptation

Each platform requires adapted content:
- **Visual consistency** across platforms
- **Platform-specific formats** and features
- **Audience expectations** and behaviors
- **Optimal posting times** for each platform

Understanding these fundamentals is crucial for effective social media management!`,
            quiz: {
              question: "Which platform is best for B2B marketing?",
              options: ["Instagram", "TikTok", "LinkedIn", "Snapchat"],
              correct: 2,
              explanation: "LinkedIn is specifically designed for professional networking and is the most effective platform for B2B marketing."
            }
          }
        ]
      }
    ]
  },

  3: {
    id: '3',
    title: 'Introduction to Digital Marketing and Analytics',
    totalPoints: 180,
    earnedPoints: 0,
    progress: 0,
    modules: [
      {
        id: 'm1',
        title: 'WEEK 1: Digital Marketing Foundations',
        lessons: [
          {
            id: 'l1',
            title: 'Introduction to Digital Marketing',
            completed: false,
            points: 20,
            content: `# Introduction to Digital Marketing

Digital marketing encompasses all marketing efforts that use electronic devices or the internet. It's how businesses connect with customers where they spend much of their time: online.

## What is Digital Marketing?

Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.

### Key Components:
- **Search Engine Optimization (SEO)**
- **Pay-Per-Click Advertising (PPC)**
- **Social Media Marketing**
- **Content Marketing**
- **Email Marketing**
- **Affiliate Marketing**
- **Influencer Marketing**

## Why Digital Marketing Matters

### Measurable Results
Unlike traditional marketing, digital marketing provides detailed analytics and metrics that help you understand campaign performance in real-time.

### Cost-Effective
Digital marketing often costs less than traditional advertising and allows for precise budget control and optimization.

### Targeted Reach
Reach specific audiences based on demographics, interests, behaviors, and more with laser precision.

### Global Reach
Connect with customers anywhere in the world, breaking down geographical barriers.

## Digital Marketing Funnel

### Awareness Stage
- **Goal**: Introduce your brand to potential customers
- **Tactics**: SEO, social media, content marketing, display ads

### Consideration Stage
- **Goal**: Nurture leads and build trust
- **Tactics**: Email marketing, retargeting, webinars, case studies

### Conversion Stage
- **Goal**: Convert prospects into customers
- **Tactics**: Landing pages, special offers, personalized messaging

### Retention Stage
- **Goal**: Keep customers engaged and encourage repeat purchases
- **Tactics**: Email campaigns, loyalty programs, customer service

## Getting Started

1. **Define your goals** - What do you want to achieve?
2. **Identify your audience** - Who are your ideal customers?
3. **Choose your channels** - Where does your audience spend time?
4. **Create compelling content** - What value can you provide?
5. **Measure and optimize** - How can you improve performance?

Digital marketing is an ever-evolving field that offers incredible opportunities for businesses of all sizes!`,
            quiz: {
              question: "What is the main advantage of digital marketing over traditional marketing?",
              options: ["It's always cheaper", "It provides measurable results", "It only works online", "It requires no strategy"],
              correct: 1,
              explanation: "The main advantage of digital marketing is that it provides detailed, measurable results that can be tracked and analyzed in real-time."
            }
          }
        ]
      }
    ]
  }
};

// Glossary terms that can be used across all courses
export const glossaryTerms = {
  'HTML': 'HyperText Markup Language - the standard markup language for creating web pages',
  'CSS': 'Cascading Style Sheets - used for describing the presentation of a document written in HTML',
  'JavaScript': 'A programming language that enables interactive web pages and is an essential part of web applications',
  'responsive design': 'An approach to web design that makes web pages render well on a variety of devices and window sizes',
  'semantic': 'HTML elements that clearly describe their meaning in a human- and machine-readable way',
  'SEO': 'Search Engine Optimization - the practice of increasing the quantity and quality of traffic to your website through organic search results',
  'PPC': 'Pay-Per-Click - an internet advertising model where advertisers pay a fee each time one of their ads is clicked',
  'conversion': 'When a visitor completes a desired action on your website, such as making a purchase or signing up for a newsletter',
  'analytics': 'The discovery, interpretation, and communication of meaningful patterns in data',
  'engagement': 'The level of interaction and involvement that users have with your content or brand',
  'ROI': 'Return on Investment - a measure of the efficiency of an investment',
  'CTR': 'Click-Through Rate - the ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement'
};

// Function to get course data by ID
export const getCourseById = (courseId) => {
  return courseData[courseId] || null;
};

// Function to get all lessons for a course
export const getAllLessons = (courseId) => {
  const course = getCourseById(courseId);
  if (!course) return [];
  
  return course.modules.flatMap(module => 
    module.lessons.map(lesson => ({
      ...lesson, 
      moduleTitle: module.title,
      moduleId: module.id
    }))
  );
};

// Function to find a specific lesson
export const getLessonById = (courseId, lessonId) => {
  const allLessons = getAllLessons(courseId);
  return allLessons.find(lesson => lesson.id === lessonId) || null;
};

// Function to get next lesson
export const getNextLesson = (courseId, currentLessonId) => {
  const allLessons = getAllLessons(courseId);
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLessonId);
  return currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
};

// Function to get previous lesson
export const getPreviousLesson = (courseId, currentLessonId) => {
  const allLessons = getAllLessons(courseId);
  const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLessonId);
  return currentIndex > 0 ? allLessons[currentIndex - 1] : null;
};

export default {
  courseData,
  glossaryTerms,
  getCourseById,
  getAllLessons,
  getLessonById,
  getNextLesson,
  getPreviousLesson
};