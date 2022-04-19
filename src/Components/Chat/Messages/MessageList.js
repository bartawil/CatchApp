import dataBase from "../../DataBase/dataBase"
import Message from "./Message"
import './MessageList.css'

function MessageList ({userIdx, contactIdx}) {
    const messageList = dataBase.at(userIdx).contactsList.at(contactIdx).chat.map((message, key) => {
        return <Message {...message} key = {key} userName={dataBase.at(userIdx).userName} />
    })

    return (
        <>
            <div className="messages-menu">
                {messageList}
            </div>
        </>
    );
}

export default MessageList;