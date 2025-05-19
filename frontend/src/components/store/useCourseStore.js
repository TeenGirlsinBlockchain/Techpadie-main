import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useCourseStore = create(
  devtools(
    (set, get) => ({
      // State
      courses: [],
      loading: false,
      error: null,
      filters: {
        level: '',
        category: '',
        search: ''
      },

      // Actions
      setCourses: (courses) => set({ courses }),
      
      setLoading: (loading) => set({ loading }),
      
      setError: (error) => set({ error }),
      
      setFilters: (filters) => set((state) => ({
        filters: { ...state.filters, ...filters }
      })),
      
      clearFilters: () => set({
        filters: { level: '', category: '', search: '' }
      }),

      // Computed values
      getFilteredCourses: () => {
        const { courses, filters } = get();
        return courses.filter(course => {
          if (filters.level && course.level !== filters.level) return false;
          if (filters.search && !course.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
          return true;
        });
      },

      getCoursesStats: () => {
        const courses = get().courses;
        return {
          total: courses.length,
          beginner: courses.filter(c => c.level === 'Beginner').length,
          intermediate: courses.filter(c => c.level === 'Intermediate').length,
          advanced: courses.filter(c => c.level === 'Advanced').length
        };
      }
    }),
    {
      name: 'course-store' 
    }
  )
);

export default useCourseStore;