import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useUserStore = create(
  devtools(
    persist(
      (set, get) => ({
        // State
        user: null,
        isAuthenticated: false,
        preferences: {
          theme: 'light',
          notifications: true,
          language: 'en'
        },

        // Actions
        setUser: (user) => set({ 
          user, 
          isAuthenticated: !!user 
        }),

        updateUser: (updates) => set((state) => ({
          user: { ...state.user, ...updates }
        })),

        setPreferences: (preferences) => set((state) => ({
          preferences: { ...state.preferences, ...preferences }
        })),

        clearUser: () => set({ 
          user: null, 
          isAuthenticated: false 
        }),

        // Computed values
        getUserDisplayName: () => {
          const user = get().user;
          return user ? user.name || user.email : 'Guest';
        },

        getUserInitials: () => {
          const user = get().user;
          if (!user || !user.name) return 'U';
          return user.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
        }
      }),
      {
        name: 'user-store', // localStorage key
        partialize: (state) => ({ 
          user: state.user, 
          isAuthenticated: state.isAuthenticated,
          preferences: state.preferences 
        })
      }
    ),
    {
      name: 'user-store' 
    }
  )
);

export default useUserStore;