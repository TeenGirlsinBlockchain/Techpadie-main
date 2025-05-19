import { useEffect } from 'react';
import useCourseStore from '../store/useCourseStore';
import courseService from '../services/courseService';

/**
 * Hook to fetch and manage courses data
 */
export const useCourses = (filters = {}) => {
  const {
    courses,
    loading,
    error,
    setCourses,
    setLoading,
    setError,
    getFilteredCourses,
    getCoursesStats
  } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, [filters]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await courseService.getAllCourses(filters);
      setCourses(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching courses:', err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchCourses();
  };

  return {
    courses: getFilteredCourses(),
    allCourses: courses,
    loading,
    error,
    stats: getCoursesStats(),
    refetch
  };
};

/**
 * Hook to fetch a single course by ID
 */
export const useCourse = (courseId) => {
  const { setLoading, setError } = useCourseStore();

  useEffect(() => {
    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);

  const [course, setCourse] = useState(null);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      setError(null);
      const courseData = await courseService.getCourseById(courseId);
      setCourse(courseData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching course:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    course,
    loading: useCourseStore(state => state.loading),
    error: useCourseStore(state => state.error),
    refetch: fetchCourse
  };
};

/**
 * Hook for course search functionality
 */
export const useCourseSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const searchCourses = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearching(true);
      const results = await courseService.searchCourses(query);
      setSearchResults(results);
    } catch (err) {
      console.error('Search error:', err);
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  };

  // Debounced search
  const debouncedSearch = useCallback(
    debounce(searchCourses, 300),
    []
  );

  return {
    searchResults,
    searching,
    searchCourses: debouncedSearch,
    clearResults: () => setSearchResults([])
  };
};

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}