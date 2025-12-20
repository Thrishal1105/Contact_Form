import React, {useState} from 'react'

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

  return (<form onSubmit={handleSubmit}>
    <input type="text" value={name} required placeholder='Name:'onChange={(e)=> setName(e.target.value)}/>
    <input type="text" value={phone} required placeholder='Phone:'onChange={(e)=> setPhone(e.target.value)}/>
    <input type="email" value={email} required placeholder='Email:'onChange={(e)=> setEmail(e.target.value)}/>

    <button type="submit">Add</button>
  </form>)
}

export default ContactForm;

