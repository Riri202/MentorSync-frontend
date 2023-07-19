/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/AppBar';
import SignUpForm from './pages/SIgnUpForm';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import Profile from './pages/profile';
import Session from './pages/session';
import Booking from './pages/session/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="mentors/:mentorId" element={<Profile />} />
          <Route path="mentors/:mentorId/session" element={<Session />} />
          <Route path="mentors/:mentorId/session/schedule" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
