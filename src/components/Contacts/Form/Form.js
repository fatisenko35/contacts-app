import { useState } from "react";
function Form({ setContacts, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" })

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {
      return;
    }
    setContacts([...contacts, form]);
    setForm({ fullName: "", phoneNumber: "" })

  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <input name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleForm}

          />
        </div>
        <div>
          <input name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleForm}

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