import React, {useState} from 'react';
import { userInfo } from 'os';



export default function SignupForm(props) {
    // const [initialFormState] = useState({ id: null, name:"", email:"", role:""})
    const {submitMember} = props
    const [newPerson, setNewPerson] = useState({name:"", email:"", role:""})

    // console.log("teamMembers",member);
    function handleChange(event) {
        const updatedUser ={...newPerson, [event.target.name]: event.target.value};
        //event.target.name is the key!!! targeting the key of a variable. NOT an array!
        //This sets the value of the key by targeting that key and changing it's value
        console.log(
            "handleChange",
            event.target.name,
            event.target.value,
            updatedUser
        );
        setNewPerson(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();//This prevents the page from re-rendering every time we submit.
        submitMember(newPerson);
        setNewPerson({name:"", email:"", role:""});

        
        console.log('name', newPerson);
    }

    // useEffect(() => {
    //     setMember(member)
    // }, [])


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
          {/* {console.log('Form', members)} */}
        </form>
    )
}