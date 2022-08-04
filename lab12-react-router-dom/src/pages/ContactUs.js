import React, { useState } from 'react';
//ahook is a funciton
//use navigate creates a function which we can use to change pages
import { useNavigate } from 'react-router-dom';


export default function ContactUs() {
    //create a navigate function returned from useNavigate()
    const navigate = useNavigate();

    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");

    // const updateFullname = (e)=>{
    //     setFullname(e.target.value)
    // }
    // const updateEmail = (e)=>{
    //     setEmail(e.target.value)
    // }

    const [formState, setFormState] = useState({ //make sure key matches input name
        fullname: "",
        email: ""
    })

    const updateFormField = (e) => {
        setFormState({
            ...formState, //has effect of duplicating the original formstate, 
            [e.target.name]: e.target.value //then rewrite the key that has been changed. the last written key will replace the earlier key with that same key
        })
    }

    function submitForm() {
        //use the returnnavigate function to change pages
        navigate('/form-submitted');
    }

    return (
        <React.Fragment>
            <div className='container'>
                <h1>Contact Us</h1>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={formState.email} onChange={updateFormField} />
                </div>
                <input type="submit" value="submit" onClick={submitForm} />
            </div>


        </React.Fragment>
    )
}