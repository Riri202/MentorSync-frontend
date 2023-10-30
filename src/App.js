/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import SignUp from './pages/SignUp';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import Profile from './pages/profile';
import Session from './pages/session';
import Availability from './pages/availability';
import Booking from './pages/session/Booking';
import SessionDetails from './pages/session/Details';
import Unauthorized from './components/Unauthorized';
import ProtectedCallRoute from './pages/session/ProtectedCallRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="users/:userId" element={<Profile />} />
          <Route path="mentors/:mentorId/session" element={<Session />} />
          <Route path="mentors/:mentorId/session/schedule" element={<Booking />} />
          <Route path="mentors/:mentorId/availability" element={<Availability />} />
          <Route path="sessions/:sessionId" element={<SessionDetails />} />
          <Route path="call/:sessionId" element={<ProtectedCallRoute />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
