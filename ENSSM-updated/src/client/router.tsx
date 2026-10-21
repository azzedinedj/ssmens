import { lazy } from 'react';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';

// Public routes (no auth required)
const publicRoutes: RouteObject[] = [
  {
    path: '/',
    Component: lazy(() => import('./pages/HomePage'))
  },
  {
    path: '/dashboard',
    Component: lazy(() => import('./pages/DashboardPage'))
  },
  {
    path: '/login',
    Component: lazy(() => import('./pages/LoginPage'))
  },
  {
    path: '/signup',
    Component: lazy(() => import('./pages/SignupPage'))
  },
  {
    path: '/logout',
    Component: lazy(() => import('./pages/LogoutPage'))
  },
  {
    path: '/terms',
    Component: lazy(() => import('./pages/TermsPage'))
  },
  {
    path: '/example/:itemId',
    Component: lazy(() => import('./pages/ExamplePage'))
  },
  {
    path: '/example/private',
    Component: lazy(() => import('./pages/PrivateExamplePage'))
  },
  {
    path: '*',
    Component: lazy(() => import('./pages/NotFoundPage'))
  }
];

export const router = createBrowserRouter([
  ...publicRoutes,
]);
