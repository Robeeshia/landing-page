import React, { useState } from 'react';
// import './styles.css';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbox">
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/833ef59869f38b5aaa6a380caf140b31ea66f890097119bcb2247b93f0499a43?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="Profile" />
            <div>
              <h4>Dhanalakshmi Hardwares</h4>
              <span>Online</span>
            </div>
            <button onClick={toggleChat} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              ✖
            </button>
          </div>
          <div className="chat-body">
            <div className="message">
              <h5>Dhanalakshmi Hardwares</h5>
              <p>Hi 👋</p>
              <p>I'm here to help, so let me know what's up and I'll be happy to find a solution.</p>
            </div>
          </div>
          <div className="chat-footer" onClick={toggleChat}>
            Start chat
          </div>
        </div>
      )}
      <div className="floating-button" onClick={toggleChat}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a082a00066bfa0cd81d247d18e490b6f98ad6aa78d17d7816cf5c2a71f3a53?apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23&&apiKey=a6ae6cedc97b497b9c41ff1c8bf5cf23" alt="" className="floating-button" />
      </div>
    </div>
  );
};

export default Chatbox;
