import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import PostDetails from './pages/PostDetails';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './pages/BlogPost';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<div>Login Page</div>} />
        
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        <Route path="/post/:postId" element={<PostDetails />} />
        {/* Dynamic Route for Blog Post */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic route for blog post */}
      </Routes>
    </Router>
  );
};

export default App;
