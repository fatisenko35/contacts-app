import React, { useState } from 'react';

function Form({addContacts, contacts}) {
 
    const [form, setForm] = useState({fullName: '', phoneNumber: ''});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
       
        if (form.fullName === '' || form.phoneNumber === '') {
            
            return;
        }
        addContacts([...contacts, form]);
        setForm({fullName : "", phoneNumber : ""});
        
    }
  return (
    <div>
      <form onSubmit = {onSubmit}>
      <div>
        <input name="fullName"
         placeholder="Full Name"
         onChange={onChangeInput}
         value={form.fullName}
         />
       </div>
      <div>
         <input name="phoneNumber" 
         placeholder="Phone Number" 
         onChange={onChangeInput}
         value={form.phoneNumber}
         />
         

      </div>
      <div>
            <button>Add</button>
      </div>
      </form>

    </div>
  )
}

export default Form