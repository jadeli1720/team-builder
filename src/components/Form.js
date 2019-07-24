import React, {useState} from 'react';



export default function SignupForm(props) {
    const [newPerson, setNewPerson] = useState({name:"", email:"", role:""})
    const members = props;

    function handleChange(event) {
        const updatedUser ={...newPerson, [event.target.name]: event.target.value};
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedUser
        );
        setNewPerson(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('name', newPerson);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="Please enter the name"
                    value={newPerson.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="text"
                    className="input"
                    name="email"
                    placeholder="Please enter a email"
                    value={newPerson.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Role:</label>
                <input
                    type="text"
                    className="input"
                    name="role"
                    placeholder="Please enter their role"
                    value={newPerson.role}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn-form">
          Submit</button>
          {console.log('Form', members)}
        </form>
    )
}