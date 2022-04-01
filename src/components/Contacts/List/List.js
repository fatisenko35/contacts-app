import {useState} from "react";
const List = ({contacts}) => {
  const [filteredText, setFilteredText] = useState("");
 
    const filtered = contacts.filter((contact) =>{
      return Object.keys(contact).some((key) =>
        contact[key].toLowerCase().includes(filteredText.toLowerCase())
      )
    })
 

  return (
    <div>
        <input 
        placeholder="Filter Contact" 
        onChange = {(e) => setFilteredText(e.target.value)}
        value={filteredText} 
        />

        <ul className="list">
          {
            filtered.map((contact, i) => (
              <li key={i}>
                <span>{contact.fullName}</span>
                <span>{contact.phoneNumber}</span>
              </li>
              
            ))
          } 
        </ul>
        <p>Total Contacts ({filtered.length}) </p>
    </div>
  )
}

export default List