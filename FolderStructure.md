## Recommended Folder Structure

react-starter-kit-ng/
├── public/
├── src/
│   ├── assets/              # Images, icons, fonts
│   ├── components/          # Reusable components (Button, Loader)
│   ├── features/            # Feature-based structure (auth, user, etc.)
│   │   └── auth/
│   │       ├── AuthPage.jsx
│   │       ├── authSlice.js
│   │       └── authAPI.js
│   ├── hooks/               # Custom hooks (useAuth, useDebounce)
│   ├── layouts/             # Page layouts (SidebarLayout, AuthLayout)
│   ├── pages/               # Top-level pages (Home, Login, NotFound)
│   ├── routes/              # All routing logic
│   ├── services/            # Axios instance, API service layer
│   ├── store/               # Redux store setup
│   │   ├── index.js
│   │   └── slices/
│   ├── styles/              # Tailwind or custom global styles
│   ├── utils/               # Helper functions, constants
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .env
├── postcss.config.js
├── tailwind.config.js
└── package.json
