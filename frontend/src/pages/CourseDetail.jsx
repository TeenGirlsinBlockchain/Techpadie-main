
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import Breadcrumb from '../components/Breadcrumb';
import CourseDescriptionCard from '../components/CourseDescriptionCard';
import CourseEnrollmentCard from '../components/CourseEnrollmentCard';
import CourseContentCard from '../components/CourseContentCard';

// Import your existing images
import webDevImage from '../../public/icons/web-dev-course-image.svg';
import socialMediaImage from '../../public/icons/social-media-image.svg';
import digitalMarketingImage from '../../public/icons/digital-marketing-image.svg';

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - in real app, this would come from API or props
  const courseData = {
    1: {
      title: 'Introduction to Web development : HTML , CSS and Javascript',
      description: 'Web development is the process of creating and maintaining websites. It is also Application programming and non-design aspects of building websites, coding individually for optimal and enhanced website. This course brings you the all the fundamentals.',
      studentsEnrolled: 120,
      rating: 4.9,
      currentPrice: 8.00,
      originalPrice: 15.00,
      discountPercent: 20,
      courseImage: webDevImage,
      courseIncludes: [
        '48 hours on-demand video',
        '3 hours',
        '2 downloadable resources',
        'Certificate'
      ]
    },
    2: {
      title: 'Introduction to Social media management and growth ads',
      description: 'Learn how to effectively manage social media platforms and create growth-focused advertising campaigns that drive engagement and conversions.',
      studentsEnrolled: 110,
      rating: 5.0,
      currentPrice: 12.00,
      originalPrice: 20.00,
      discountPercent: 25,
      courseImage: socialMediaImage,
      courseIncludes: [
        '24 hours on-demand video',
        '5 hours',
        '4 downloadable resources',
        'Certificate'
      ]
    },
    3: {
      title: 'Introduction to digital marketing and analytics',
      description: 'Master the fundamentals of digital marketing and learn how to track, measure, and optimize your marketing campaigns using analytics.',
      studentsEnrolled: 115,
      rating: 4.8,
      currentPrice: 10.00,
      originalPrice: 18.00,
      discountPercent: 30,
      courseImage: digitalMarketingImage,
      courseIncludes: [
        '36 hours on-demand video',
        '4 hours',
        '6 downloadable resources',
        'Certificate'
      ]
    }
  };

  // Mock course content sections
  const courseSections = [
    {
      id: 1,
      title: 'WEEK 1 : Introduction to web development',
      duration: '2hr 30min',
      lessons: [
        { title: 'Introduction to Responsive design', duration: '10min' },
        { title: 'Introduction to Responsive design', duration: '15min' },
        { title: 'Introduction to Responsive design', duration: '12min' },
        { title: 'Introduction to Responsive design', duration: '20min' },
        { title: 'Introduction to Responsive design', duration: '18min' },
        { title: 'Introduction to Responsive design', duration: '25min' }
      ]
    }
  ];

  const course = courseData[id] || courseData[1]; // Default to first course if not found

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Courses', href: '/dashboard' },
    { label: 'Recommended courses', href: '/learn' },
    { label: course.title }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <TopNavigation />
        
        {/* Page Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Main Layout - 3 Card Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Left - Course Description Card */}
            <CourseDescriptionCard 
              title={course.title}
              description={course.description}
              studentsEnrolled={course.studentsEnrolled}
              rating={course.rating}
            />
            
            {/* Top Right - Course Enrollment Card */}
            <CourseEnrollmentCard 
              courseImage={course.courseImage}
              currentPrice={course.currentPrice}
              originalPrice={course.originalPrice}
              discountPercent={course.discountPercent}
              courseIncludes={course.courseIncludes}
            />
            
            {/* Bottom - Course Content Card (Full Width) */}
            <div className="lg:col-span-2">
              <CourseContentCard sections={courseSections} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;