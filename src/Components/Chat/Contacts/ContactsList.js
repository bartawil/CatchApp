import Contact from "./Contact";
import "./ContactsList.css";

function ContactsList({newUserDB, openChat}) {

    const contactList = newUserDB.map((contact, key)=>{
        return <Contact {...contact} key={key} openChat={openChat}/>
    })
    
    return(
        <>

            <div className="main-menu">
                {contactList}
            </div>

        </>
    );
}

export default ContactsList;