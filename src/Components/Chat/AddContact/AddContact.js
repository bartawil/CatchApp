import "./AddContact.css";
import {useRef, useState} from 'react';
import dataBase from "../../DataBase/dataBase";


function AddContact({addUser, userIdx}){
    const addUserBox = useRef(null);

    const [newContact, setNewContact] = useState('');
    function addNewContact(){
        setNewContact(addUserBox.current.value);
    }

    const [error, setError] = useState("");
    function checkValid(){
        if(!newContact) {
            setError("Please enter contact username first");
        } else if (dataBase.at(userIdx).userName === newContact) {
            setError("You can't add yourself as a contact");
        } else if(dataBase.some(item => newContact === item.userName)) {
            if(dataBase.at(userIdx).contactsList.some(item => newContact === item.userName)){
                setError("Contact already added");
            } else {
                setError("Contact added succesfully (:");
                addUser(dataBase.findIndex((item) => item.userName === newContact));
            }
        } else {
            setError("This contact doesn't exist in CatchApp users");
        }
    }
    
    return(
        <>
            <button type="button" className="d-sm-none d-md-block add-contact" data-toggle="modal" data-target="#exampleModal">
                <i className="bi bi-person-plus-fill d-none d-sm-block"></i>
            </button>
            <form>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input ref={addUserBox} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact username here" onChange={addNewContact}></input>
                                <p id='add-contact-error'>{error}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={checkValid}>Add Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddContact; 