import ResponsiveAppBar from "./components/AppBar";
import SignUpForm from "./pages/SIgnUpForm";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignInForm from "./pages/SignInForm";
import AllMentors from "./pages/AllMentors";
import MentorProfile from "./pages/MentorProfile";


function App() {
  return (
    <div className="App">
      <Router>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Signup" element={<SignUpForm/>}/>
        <Route path="/Signin" element={<SignInForm/>}/> 
        <Route path="/Allmentors" element={<AllMentors/>}/>
        <Route path="/mentor" element={<MentorProfile/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
