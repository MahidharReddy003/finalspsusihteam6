# Authentication System for SIH Website

## Overview
This document describes the authentication system implemented for the SIH (Smart India Hackathon) website, which includes login and signup functionality with a modern, responsive design.

## Features

### Login Page (`/login`)
- **Username/Password Authentication**: Traditional form-based login
- **Password Visibility Toggle**: Show/hide password functionality
- **Remember Me**: Checkbox for persistent login
- **Social Login**: Google and Facebook login options (UI only)
- **Forgot Password**: Link to password recovery (placeholder)
- **Error Handling**: Display validation and authentication errors
- **Responsive Design**: Works on desktop and mobile devices

### Signup Page (`/signup`)
- **User Registration**: Username, email, and password fields
- **Password Strength Indicator**: Visual feedback on password strength
- **Password Confirmation**: Verify password matching
- **Terms & Conditions**: Required agreement checkbox
- **Social Signup**: Google and Facebook signup options (UI only)
- **Real-time Validation**: Immediate feedback on form errors
- **Responsive Design**: Mobile-friendly layout

### Authentication Context
- **State Management**: Centralized authentication state
- **Token Storage**: Local storage for persistent sessions
- **Route Protection**: Automatic redirection for unauthenticated users
- **Logout Functionality**: Clear session and redirect to login

## Technical Implementation

### Components
1. **Login.jsx** - Login form component
2. **Signup.jsx** - Registration form component
3. **AuthContext.jsx** - Authentication context provider
4. **App.jsx** - Updated with route protection

### Key Features
- **React Router**: Client-side routing with protected routes
- **Context API**: Global state management for authentication
- **Tailwind CSS**: Modern styling with responsive design
- **Lucide React**: Icon library for UI elements
- **Local Storage**: Persistent authentication tokens

### Route Structure
```
/ (root) → Redirects to /dashboard if authenticated, /login if not
/login → Public route for authentication
/signup → Public route for registration
/dashboard → Protected route (requires authentication)
/profile → Protected route
/internships → Protected route
/recommendations → Protected route
/applications → Protected route
/company-portal → Protected route
```

## Usage

### For Users
1. **First Time**: Visit `/signup` to create an account
2. **Returning Users**: Visit `/login` to sign in
3. **Navigation**: Use the logout button in the sidebar to sign out

### For Developers
1. **Authentication State**: Use `useAuth()` hook to access auth context
2. **Protected Routes**: Wrap components with authentication checks
3. **API Integration**: Replace mock authentication with real API calls

## Customization

### Styling
- Colors: Purple and blue gradient theme
- Typography: Inter font family
- Icons: Lucide React icon library
- Responsive: Mobile-first design approach

### Authentication Logic
- Replace mock API calls in Login/Signup components
- Implement real JWT token handling
- Add password recovery functionality
- Integrate with backend authentication service

## Security Considerations
- Passwords are validated for strength
- Tokens stored in localStorage (consider httpOnly cookies for production)
- Route protection prevents unauthorized access
- Form validation prevents invalid submissions

## Future Enhancements
- Email verification
- Two-factor authentication
- Password recovery flow
- Social login integration
- Session timeout handling
- Remember me functionality
