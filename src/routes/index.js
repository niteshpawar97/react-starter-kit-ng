// src/routes/Router.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from './ScrollToTop';
import DashboardLayout from '../layouts/DashboardLayout';
import { Home, NotFound, Dashboard, ContactPage } from '../pages'; // Importing pages from index.js
// 🔁 These are outside pages folder, still lazy load individually
const Login = lazy(() => import('../features/auth/AuthPage'));
const Signup = lazy(() => import('../features/auth/SignupPage'));


const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark text-dark dark:text-light transition-colors">
            <div className="flex flex-col items-center gap-4">
              <svg
                className="animate-spin h-10 w-10 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <p className="text-sm font-medium">Loading, please wait...</p>
            </div>
          </div>
        }
      >

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 🔐 Protected Route with DashboardLayout */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* ❌ 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
