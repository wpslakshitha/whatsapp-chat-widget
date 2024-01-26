'use client'
import React, {useEffect, useRef, useState} from 'react';
import '@/app/globals.css';

const WhatsAppChatWidget = () => {
  const [chatBoxState, setChatBoxState] = useState('closed');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        setChatBoxState('closed');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const hideChatBox = () => {
    setChatBoxState('closed');
  };

  const toggleChatBox = () => {
    setChatBoxState((prev) => (prev === 'closed' ? 'open' : 'closed'));
  };


  return (
    <div className={`WA_Chat_Widget ${chatBoxState}`} data-position="bottom-right" ref={chatBoxRef}>
      <div className="WA_ChatBox">
        <div className="WA_ChatBox_Header">
          <div className="avatarBox">
            <img src="https://www.svgrepo.com/show/293550/customer-service-support.svg" alt="Chat Avatar"/>
          </div>
          <div className="infoBox">
            <h4 className="name">LumiNex User</h4>
            <span className="answer_time">Typically replies within a hour</span>
          </div>
          <button className="WA_Close" onClick={hideChatBox}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
            </svg>
          </button>
        </div>
        <div className="WA_ChatBox_Body">
          <div className="message">
            <h4 className="username">Welcome!</h4>
            <div className="message_content">
              <p>Hey there! 👋<br/>
                How can we help you?</p>
            </div>
          </div>
        </div>
        <div className="WA_ChatBox_Footer">
          <a className="btn btn-whatsapp" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            Start Chat
          </a>
        </div>
      </div>
      <div className="WA_FloatingButton" onClick={toggleChatBox}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#4FCE5D" viewBox="0 0 90 90">
          <path
            d="M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 01-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 01-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0045.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"></path>
        </svg>
      </div>
    </div>
  );
};

export default WhatsAppChatWidget;
