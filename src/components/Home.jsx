import React from 'react';

const Home = () => {
  
  const text = "\"Your Trusted Hardware Partner for 31 Years!\"";
  return (
  <section className="hero" id="home">
    <div className="hero-content">

<div className ='welcome-text'>
      {text.split("").map((char, index) => (
        <span key={index} style={{ '--i': index }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}</div>

      <p className="hero-subtitle">"We Got You Covered for All Your Hardware Needs Since 1993."</p>
      <a href="#contact" className="cta-button" onClick={scrollToSection}>
        Visit us today
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d36b880061347cc189e1974181f9e70b56c145138a0c44ef63ebb02ac4051bcc?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="" className="cta-icon" />
      </a>
    </div>
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e60bbf9354d8a1aa4876b90b2bfee6cb84881ba24bf1beb30a7d8fae8aed86?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="Hardware store showcase" className="hero-image" />
  </section>
);}


function scrollToSection(event) {
  event.preventDefault();
  console.log(event);
  const targetId = event.currentTarget.getAttribute('href').substring(1);
  console.log(targetId);
  const targetElement = document.getElementById(targetId);
  console.log(targetElement);
  if (targetElement) {
    console.log(targetElement);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

export default Home;