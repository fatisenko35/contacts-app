import React,{ useState, useEffect } from 'react';
import Form from './Form/Form';
import List from './List/List';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: 'Fatih', 
      phoneNumber: '54688776'
    },
    {
      fullName: 'Faruk',
      phoneNumber: '54788665'
    },
    {
      fullName: 'Hakkı',
      phoneNumber: '57845121'
    }
  ])
 useEffect(() => {
    console.log(contacts)
 }, [contacts])

  return (
    <div className="container">
      <h2>Contacts</h2>
        <List contacts={contacts}/>
        <Form setContacts = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts