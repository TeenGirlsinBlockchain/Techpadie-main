import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';

// Sample course data based on the images
const coursesData = [
  {
    id: 1,
    image: '/images/course1.jpg', // Replace with actual image paths
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    students: 120,
    rating: 5.0,
    deviceType: 'desktop',
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg' // Replace with actual avatar path
    }
  },
  {
    id: 2,
    image: '/images/course2.jpg',
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    students: 110,
    rating: 5.0,
    deviceType: 'mobile',
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 3,
    image: '/images/course3.jpg',
    title: 'Introduction to digital marketing',
    subtitle: 'and analytics.',
    level: 'Beginner',
    students: 115,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 4,
    image: '/images/course3.jpg',
    title: 'Introduction to digital marketing',
    subtitle: 'and analytics.',
    level: 'Beginner',
    students: 105,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 5,
    image: '/images/course1.jpg',
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    students: 125,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 6,
    image: '/images/course2.jpg',
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    students: 105,
    rating: 5.0,
    deviceType: 'mobile',
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 7,
    image: '/images/course1.jpg',
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    students: 112,
    rating: 4.9,
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 8,
    image: '/images/course3.jpg',
    title: 'Introduction to digital marketing',
    subtitle: 'and analytics.',
    level: 'Beginner',
    students: 108,
    rating: 5.0,
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  },
  {
    id: 9,
    image: '/images/course2.jpg',
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    students: 115,
    rating: 5.0,
    deviceType: 'mobile',
    instructor: {
      name: 'Chris Walter',
      avatar: '/images/chris-walter.jpg'
    }
  }
];

const Dashboard = () => {
 
  const userData = {
    name: 'Elijah',
    avatar: '/images/user-avatar.jpg' 
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-32 p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-10 lg:mt-0">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Welcome back {userData.name}</h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">Top courses you may like to enroll in today!</p>
          </div>
          
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full overflow-hidden">
            <img 
              src={userData.avatar} 
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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