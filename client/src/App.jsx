import React, { useEffect, useState } from 'react';
import API from './api'
import "./App.css"
import ContactForm from './ContactForm.jsx'
import ContactList from './ContactList.jsx'
 const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  console.log(editContact);

  const fetchContacts = async()=>{
    const res = await API.get("/");
    setContacts(res.data);
  }

  useEffect(()=>{
    fetchContacts();
  }, []);

  const addContact = async(data)=>{
    await API.post("/", data);
    fetchContacts();
  };

  
  const deleteContact = async(id)=>{
    await API.delete(`/${id}`);
    fetchContacts();
  }


  const updateContact = async(id, data)=>{
    await API.put(`/${existing._id}`, data);
    setEditContact(null);
    fetchContacts();
  }


  return (
    <div>
      <ContactForm onSubmit={editContact ?  updateContact : addContact} existing = {editContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} onEdit={setEditContact} />
    </div>
  )
}


export default App;
