import "./Chat.css";
import dataBase from "../DataBase/dataBase";
import AddContact from "./AddContact/AddContact";
import ContactsList from "./Contacts/ContactsList";
import { useState } from "react";
import Search from "./Search/Search";
// import ChatBox from "./ChatBox/ChatBox";

function Chat({userIdx}) {
  
  const [newUserList, setNewUserList] = useState(dataBase.at(userIdx).contactsList);
  function updateUserList(e) {
    setNewUserList(e.concat());
  }

  function addUser(contactIdx) {
    dataBase.at(userIdx).contactsList.unshift(
    {
      userName: dataBase.at(contactIdx).userName, 
      displayName: dataBase.at(contactIdx).displayName, 
      img: dataBase.at(contactIdx).img, 
      chat: []
    });
    setNewUserList(dataBase.at(userIdx).contactsList.concat());
  }

  function doSearch(q){
    setNewUserList(dataBase.at(userIdx).contactsList.filter((contact)=>contact.displayName.toLowerCase().includes(q.toLowerCase())));
  }

  const [contactID, setContactID] = useState("");
  function openChat(userName) {
    setContactID(userName);
  }

  return (
    <div className='container'>
      <div className='row no-gutters'>
        <div className=' col-2 col-sm-3 col-md-4 border-right'>

          {/* First Row!! */}
          <div className='settings-tray'>
            <img className='profile-image' src={dataBase.at(userIdx).img}></img>
            <span className="profile-name">
              {dataBase.at(userIdx).displayName}
            </span>
            <span className='settings-tray--right'>
              <AddContact addUser={addUser} userIdx={userIdx}/>
            </span>
          </div>
          {/* Second Row!!  - Search box*/}
          <Search doSearch={doSearch}/>
          {/* Third Row!! */} 
          <ContactsList newUserDB={newUserList} openChat={openChat}/>
        </div>

        {/* <div className='col-10 col-sm-9 col-md-8'>
          <ChatBox contactID={contactID} userIdx={userIdx} openChat={openChat} updateUserList={updateUserList}/>
        </div> */}
      </div>
    </div>
  );
}

export default Chat;