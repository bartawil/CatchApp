import React from "react";

function Message({from, to, what, when, type, userName}){

    return (
        <div>
            <React.Fragment>
                {(userName === from) ? (
                    <div className='row no-gutters'>
                        <div className='col-md-3 offset-md-9'>
                            <div className='chat-bubble chat-bubble--blue chat-bubble--right'>
                                {(type === "text") ? what : 
                                (type === "img") ? <img className="img" alt='img-message' src={what} id="output" width="200" /> : 
                                (type === "video") ? 
                                <video className="img" height="200px" controls>
                                    <source src={what} />
                                </video> : <audio className="audio" controls src={what} />
                                }
                                <div className='time-info'>
                                    {when}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='row no-gutters'>
                        <div className='col-md-3'>
                            <div className='chat-bubble chat-bubble--left'>
                                {(type === "text") ? what : 
                                (type === "img") ? <img className="img" alt='img-message' src={what} id="output" width="200" /> : 
                                (type === "video") ? 
                                <video className="img" height="200px" controls>
                                    <source src={what} />
                                </video> : <audio className="audio" controls src={what} />
                                }
                                <div className='time-info'>
                                    {when}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        </div>
    );
}

export default Message;