src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   └── LoadingSpinner/
│   ├── layout/              # Layout components
│   │   ├── Sidebar/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── DashboardLayout/
│   └── ui/                  # Design system components
├── features/
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   ├── courses/             # Course-related components
│   │   ├── components/
│   │   │   ├── CourseCard/
│   │   │   ├── CourseGrid/
│   │   │   ├── CourseDetail/
│   │   │   └── CourseFilters/
│   │   ├── hooks/
│   │   └── services/
│   ├── auth/                # Authentication
│   ├── profile/             # User profile
│   └── community/           # Community features
├── store/                   # Zustand stores
│   ├── useUserStore.js
│   ├── useCourseStore.js
│   └── index.js
├── services/                # API services
│   ├── api.js
│   ├── courseService.js
│   └── userService.js
├── hooks/                   # Shared custom hooks
├── utils/                   # Helper functions
├── constants/               # App constants
├── data/                    # Mock data (for development)
└── assets/                  # Static assets

// Package.json additions
{
  "dependencies": {
    "zustand": "^4.4.1",
    "@mui/material": "^5.14.1",
    "@mui/icons-material": "^5.14.1",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0"
  }
}