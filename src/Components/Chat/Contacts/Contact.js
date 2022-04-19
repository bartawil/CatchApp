import "./Contact.css";
import React from 'react'

function Contact({displayName, img, userName, chat, openChat}) {

  function openChatHalper() {
    openChat(userName);
  }
  return (
    <div>
      <React.Fragment>
        {chat.length !== 0 ? (
          <div>
          <div className='friend-drawer friend-drawer--onhover' onClick={openChatHalper}>
            <img className='profile-image' alt="Friend photo" src={img}></img>
            <div className='text d-none d-sm-block'>
              <h6 >{displayName}</h6>
              <p className='text-muted d-none d-md-block' >{ (chat.at(0).type === "text") ? chat.at(0).what : chat.at(0).type}</p>
            </div>
            <span className="time text-muted small d-none d-md-block">{chat.at(0).when}</span>
          </div>
          <hr className='hr-friend-drawer'></hr>
        </div>
        ) : (
          <div>
          <div className='friend-drawer friend-drawer--onhover' onClick={openChatHalper}>
            <img className='profile-image' alt="Friend photo" src={img}></img>
            <div className='text d-none d-sm-block'>
              <h6 className=" d-none d-md-block">{displayName}</h6>
            </div>
          </div>
          <hr className='hr-friend-drawer'></hr>
        </div>
        )}
      </React.Fragment>
    </div>
    );
}

export default Contact;
