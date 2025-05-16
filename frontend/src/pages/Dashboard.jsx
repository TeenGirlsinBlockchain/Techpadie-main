import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';


import userAvatar from '../assets/user-avatar.svg';
import instructorAvatar from '../assets/instructor-avatar.svg';
import webDevImage from '../assets/web-dev-course-image.svg';
import digitalMarketingImage from '../assets/digital-marketing-image.svg';
import socialMediaImage from '../assets/social-media-image.svg';

// Sample course data
const coursesData = [
  {
    id: 1,
    image: webDevImage,
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    students: 120,
    rating: 5.0,
    deviceType: 'desktop',
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 2,
    image: socialMediaImage,
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    students: 110,
    rating: 5.0,
    deviceType: 'mobile',
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 3,
    image: digitalMarketingImage,
    title: 'Introduction to digital marketing',
    subtitle: 'and analytics.',
    level: 'Beginner',
    students: 115,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 4,
    image: digitalMarketingImage,
    title: 'Introduction to digital marketing',
    subtitle: 'and analytics.',
    level: 'Beginner',
    students: 105,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 5,
    image: webDevImage,
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    students: 125,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 6,
    image: socialMediaImage,
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    students: 105,
    rating: 5.0,
    deviceType: 'mobile',
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 7,
    image: webDevImage,
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    students: 112,
    rating: 4.9,
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 8,
    image: digitalMarketingImage,
    title: 'Introduction to digital marketing',
    subtitle: 'and analytics.',
    level: 'Beginner',
    students: 108,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  },
  {
    id: 9,
    image: socialMediaImage,
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    students: 115,
    rating: 5.0,
    deviceType: 'mobile',
    instructor: {
      name: 'Chris Walter',
      avatar: instructorAvatar
    }
  }
];

const Dashboard = () => {
  // User data
  const userData = {
    name: 'Elijah',
    avatar: userAvatar
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back {userData.name}</h1>
            <p className="text-gray-600 mt-1">Top courses you may like to enroll in today!</p>
          </div>
          
          <div className="w-12 h-12 bg-yellow-100 rounded-full overflow-hidden">
            <img 
              src={userData.avatar} 
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map(course => (
            <Link to={`/course/${course.id}`} key={course.id} className="hover:no-underline">
              <CourseCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;