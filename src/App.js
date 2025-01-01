import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
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

export default App;
