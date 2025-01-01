import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <p>Welcome to the Login Page. Please log in to continue.</p>
    </div>
  );
}

function SignIn() {
  return (
    <div>
      <h2>Sign In Page</h2>
      <p>Create an account to join Himanshu's Cyber Security World.</p>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Himanshu's Cyber Security World</h1>
        <p>Discover the expertise of Himanshu in the field of cyber security.</p>
        <Link to="/login" className="App-link">Login</Link>
        <Link to="/signin" className="App-link">Sign In</Link>
      </header>
      <section className="Hero-section">
        <h2>Big Hero Section</h2>
        <p>Learn about the latest trends and technologies in cyber security.</p>
      </section>
      <section className="About-section">
        <h2>About Himanshu</h2>
        <p>Himanshu is a renowned cyber security expert with years of experience in the industry.</p>
      </section>
      <section className="Services-section">
        <h2>Services</h2>
        <p>Explore the wide range of cyber security services offered by Himanshu.</p>
      </section>
      <section className="Contact-section">
        <h2>Contact</h2>
        <p>Get in touch with Himanshu for any cyber security-related inquiries.</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
