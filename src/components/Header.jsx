// import React from 'react';

// const Header = () => (
//   <header className="header">
//     <div className="logo">Logo</div>
//     <nav className="nav">
//       <ul className="nav-list">
//         <li><a href="#home" className="nav-link">Home</a></li>
//         <li><a href="#about" className="nav-link">About</a></li>
//         <li><a href="#category" className="nav-link">Category</a></li>
//         <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
//         <li><a href="#contact" className="nav-link">Contact</a></li>
//       </ul>
//     </nav>
//   </header>
// );

// export default Header;

import React from 'react';

const Header = () => (
  <header className="header">
    <div className="logo">Logo</div>
    <nav className="nav">
      <ul className="nav-list">
        <li><a href="#home" className="nav-link" onClick={scrollToSection}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={scrollToSection}>About</a></li>
        <li><a href="#category" className="nav-link" onClick={scrollToSection}>Category</a></li>
        <li><a href="#testimonials" className="nav-link" onClick={scrollToSection}>Testimonials</a></li>
        <li><a href="#contact" className="nav-link" onClick={scrollToSection}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

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

export default Header;
