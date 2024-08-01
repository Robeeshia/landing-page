import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-info">
       <div className="footer-logo">Logo</div> 
        <div className="footer-details">
          <h3 className="footer-title">Dhanalakshmi Hardware</h3>
          <h4 className="footer-subtitle">Address</h4>
          <p className="footer-address">
            1-B, Surendra Nagar 1st Street, Medavakkam Main 
            <br/>Rd, Adambakkam, Chennai, Tamil Nadu 600088
          </p>
        </div>
      </div>
      <div className="footer-social">
        <h4 className="social-title">You can find us at</h4>
        <div className="social-icons">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3234855854cf47921c8b46636e63bd535aa1f4fbfc826152d57d90ac54b0a46?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="Facebook" className="social-icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8043a8cb1dd2c3408015e4c4d8031aede35a03c19172df1ceda66c1a8d92948?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="Twitter" className="social-icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba9997875fccd94f5e1f6a847abce26238ea0f0a55c206d88fa57e21e9aa07f1?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="Instagram" className="social-icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d352337ba3cc7cb178764377f03542ea507cf11d4e7c904d857b6eb61e100d83?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="LinkedIn" className="social-icon" />
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      © 2024 Company Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
