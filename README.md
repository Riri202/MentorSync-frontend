# MentorSync Frontend

A React-based mentoring platform that connects mentors and mentees. Users can browse mentors, book sessions, and conduct video calls with real-time video/audio capabilities.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MentorSync-frontend
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on code changes.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

## ESLint Fix

If you encounter ESLint errors after cloning the app, run:
```bash
npx eslint "src/**/*.{js,jsx}" --fix
```
This will automatically fix most linting issues.

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/hooks/` - Custom React hooks
- `src/api/` - API/HTTP utilities
- `src/redux/` - State management
- `src/utils/` - Helper functions and constants
