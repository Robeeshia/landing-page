import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Brands from './Brands';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Chatbox from './Chatbox';

const MainComponent = () => (
  <div className="main-container">
  <Chatbox />
    <Header />
    <main>
      <Home />
      <About />
      <Category />
      <Brands />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default MainComponent;