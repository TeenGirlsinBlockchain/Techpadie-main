import webDevImage from '../icons/web-dev-course-image.svg';
import digitalMarketingImage from '../icons/digital-marketing-image.svg';
import socialMediaImage from '../icons/social-media-image.svg';
import instructorAvatar from '../icons/instructor-avatar.svg';

const mockCourses = [
  {
    id: 1,
    image: webDevImage,
    title: 'Introduction to web development',
    subtitle: 'using HTML,CSS and javascript.',
    level: 'Beginner',
    category: 'Development',
    students: 120,
    rating: 5.0,
    price: 99.99,
    duration: '8 weeks',
    deviceType: 'desktop',
    instructor: {
      id: 1,
      name: 'Chris Walter',
      avatar: instructorAvatar,
      bio: 'Senior Full Stack Developer with 10+ years experience'
    },
    description: 'Learn the fundamentals of web development...',
    syllabus: [
      { title: 'HTML Basics', duration: '2 hours' },
      { title: 'CSS Styling', duration: '3 hours' },
      { title: 'JavaScript Fundamentals', duration: '4 hours' }
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend']
  },
  {
    id: 2,
    image: socialMediaImage,
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    category: 'Marketing',
    students: 110,
    rating: 5.0,
    price: 79.99,
    duration: '6 weeks',
    deviceType: 'mobile',
    instructor: {
      id: 1,
      name: 'Chris Walter',
      avatar: instructorAvatar,
      bio: 'Senior Full Stack Developer with 10+ years experience'
    },
    description: 'Master social media marketing strategies...',
    syllabus: [
      { title: 'Platform Basics', duration: '2 hours' },
      { title: 'Content Strategy', duration: '3 hours' },
      { title: 'Ad Campaigns', duration: '4 hours' }
    ],
    tags: ['Social Media', 'Marketing', 'Advertising', 'Growth']
  },

  {
    id: 2,
    image: digitalMarketingImage,
    title: 'Introduction to Social media management',
    subtitle: 'and growth ads.',
    level: 'Beginner',
    category: 'Marketing',
    students: 110,
    rating: 5.0,
    price: 79.99,
    duration: '6 weeks',
    deviceType: 'mobile',
    instructor: {
      id: 1,
      name: 'Chris Walter',
      avatar: instructorAvatar,
      bio: 'Senior Full Stack Developer with 10+ years experience'
    },
    description: 'Master social media marketing strategies...',
    syllabus: [
      { title: 'Platform Basics', duration: '2 hours' },
      { title: 'Content Strategy', duration: '3 hours' },
      { title: 'Ad Campaigns', duration: '4 hours' }
    ],
    tags: ['Social Media', 'Marketing', 'Advertising', 'Growth']
  }

];

// Simulate API delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class CourseService {
  async getAllCourses(filters = {}) {
    await delay(500); // Simulate network delay
    
    let courses = [...mockCourses];
    
    // Apply filters
    if (filters.level) {
      courses = courses.filter(course => course.level === filters.level);
    }
    
    if (filters.category) {
      courses = courses.filter(course => course.category === filters.category);
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.subtitle.toLowerCase().includes(searchTerm) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    return {
      data: courses,
      total: courses.length,
      page: filters.page || 1,
      limit: filters.limit || 10
    };
  }

  async getCourseById(id) {
    await delay(300);
    const course = mockCourses.find(course => course.id === parseInt(id));
    
    if (!course) {
      throw new Error('Course not found');
    }
    
    return course;
  }

  async getCoursesByInstructor(instructorId) {
    await delay(400);
    return mockCourses.filter(course => course.instructor.id === instructorId);
  }

  async getPopularCourses(limit = 6) {
    await delay(200);
    return [...mockCourses]
      .sort((a, b) => b.students - a.students)
      .slice(0, limit);
  }

  async searchCourses(query) {
    await delay(300);
    const searchTerm = query.toLowerCase();
    return mockCourses.filter(course => 
      course.title.toLowerCase().includes(searchTerm) ||
      course.subtitle.toLowerCase().includes(searchTerm) ||
      course.instructor.name.toLowerCase().includes(searchTerm)
    );
  }
}

export default new CourseService();