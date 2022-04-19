import {useState} from 'react';
import "./ChatBox.css"
import dataBase from "../../DataBase/dataBase";
import React from 'react'; 
// import MessageList from "../Messages/MessageList";
import AddFiles from "./AddFiles/AddFiles";

function ChatBox({contactID, userIdx, updateUserList}) {

    const index = dataBase.at(userIdx).contactsList.findIndex((user) => user.userName === contactID);

    function handleImg(src) {
        if (src == ""){
            return;
        }
        var dateTime = new Date();
        var datePart = `${dateTime.toLocaleDateString(undefined, {month: "short", day: "numeric"})}`;
        var hourPart = new Date;
        console.log(datePart);
        hourPart = hourPart.toLocaleString('en-GB', { hour: "numeric", minute:"numeric"});
        var time = datePart.concat(" ").concat(hourPart);
        dataBase.at(userIdx).contactsList.at(index).chat.unshift({ 
            from: dataBase.at(userIdx).userName ,
            to: dataBase.at(userIdx).contactsList.at(index).userName,
            what: src,
            when: time,
            type: "img"
        })
        updateUserList(dataBase.at(userIdx).contactsList);
    }

    function handleVideo(src) {
        if (src == ""){
            return;
        }
        var dateTime = new Date();
        var datePart = `${dateTime.toLocaleDateString(undefined, {month: "short", day: "numeric"})}`;
        var hourPart = new Date;
        console.log(datePart);
        hourPart = hourPart.toLocaleString('en-GB', { hour: "numeric", minute:"numeric"});
        var time = datePart.concat(" ").concat(hourPart);
        dataBase.at(userIdx).contactsList.at(index).chat.unshift({ 
            from: dataBase.at(userIdx).userName ,
            to: dataBase.at(userIdx).contactsList.at(index).userName,
            what: src,
            when: time,
            type: "video"
        })
        updateUserList(dataBase.at(userIdx).contactsList);
    }
    function handleRecording(src) {
        if (src == ""){
            return;
        }
        var dateTime = new Date();
        var datePart = `${dateTime.toLocaleDateString(undefined, {month: "short", day: "numeric"})}`;
        var hourPart = new Date;
        console.log(datePart);
        hourPart = hourPart.toLocaleString('en-GB', { hour: "numeric", minute:"numeric"});
        var time = datePart.concat(" ").concat(hourPart);
        dataBase.at(userIdx).contactsList.at(index).chat.unshift({ 
            from: dataBase.at(userIdx).userName ,
            to: dataBase.at(userIdx).contactsList.at(index).userName,
            what: src,
            when: time,
            type: "recording"
        })
        updateUserList(dataBase.at(userIdx).contactsList);
    }

    // Input Field handlern
    const [inputValue, setInputValue] = useState("");
    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };
    const sendMessage = () => {
        if (inputValue == ""){
            return;
        }
        var dateTime = new Date();
        var datePart = `${dateTime.toLocaleDateString(undefined, {month: "short", day: "numeric"})}`;
        var hourPart = new Date;
        console.log(datePart);
        hourPart = hourPart.toLocaleString('en-GB', { hour: "numeric", minute:"numeric"});
        var time = datePart.concat(" ").concat(hourPart);
    
        dataBase.at(userIdx).contactsList.at(index).chat.unshift({ 
            from: dataBase.at(userIdx).userName ,
            to: dataBase.at(userIdx).contactsList.at(index).userName,
            what: inputValue,
            when: time,
            type: "text"
        })
        setInputValue("");
        updateUserList(dataBase.at(userIdx).contactsList);
    };
    function pressEnter(e) {
        if (e.keyCode === 13) {
           sendMessage();
        }
    }
    return(
        <div>
            <React.Fragment>
                { contactID === '' ? (
                    <>
                    
                    </>
                ) : (
                    <>

                    {/* top bar */ }

                    <div className='settings-tray'>
                        <img className='profile-image' src={dataBase.at(userIdx).contactsList.at(index).img}></img>
                        <div className="profile-name">
                            {dataBase.at(userIdx).contactsList.at(index).displayName}
                        </div>
                    </div>

                    {/* chat */ }

                            <div className="chat-panel">
                            {/*<MessageList userIdx={userIdx} contactIdx={index}/>*/}

                            </div>

                    {/* bottom bar */}
                    <div className="chat-box-tray">
                     <AddFiles sendMessage={sendMessage} handleImg={handleImg} handleVideo={handleVideo} handleRecording={handleRecording}/>
                        {/* message bar */}
                        <input type="text" value={inputValue} onChange={handleUserInput} className='send-bar' placeholder="Type your message here..." onKeyUp={pressEnter}>
                        </input>
                        {/* send button */}
                        <button type="button" className="btn" onClick={sendMessage}>
                            <i className="bi bi-send-fill">
                            </i>
                        </button>
                        <div className="input-group-prepend">
                        </div>
                    </div>
                    </>
                )}
            </React.Fragment>
        </div>
    );
}
export default ChatBox;