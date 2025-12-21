import React from "react";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div> 
        <h2>All Contacts</h2>
        <ul>
            {
                contacts.map((contact)=>(
                    <li key={contact._id}>
                        <strong>{contact.name}</strong> - {contact.phone} - {contact.email}
                        <button onClick={() => onEdit(contact)}>Edit</button>
                        <button onClick={() => onDelete(contact._id)}>Delete</button>
                    </li>
                ))
            }
        </ul>


    </div>
  );
}   

export default ContactList;
