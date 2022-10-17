import { useState } from "react";
import * as usersService from '../../utilities/users-service';
import {useNavigate} from 'react-router-dom';
import './LoginForm.css'

export default function LoginForm({setUser}) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
      });

    const navigate = useNavigate();


    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value })
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        // try {
            //The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user)
            navigate('/giftlist');
        // } catch {
        //     setError('Log In Failed - Try Again')
        // }
    }

    return (
        <div>
            <section >
        <h3>Login Form</h3>
        <form className="LoginForm" autoComplete="off" onClick={handleSubmit}>
            <div>
            <label>Email</label>
            </div>
            <div>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} required /> 
            </div>
            <div>
            <label>Password</label>
            </div>
            <div>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required/>
            </div>
            <button className="login-btn" type="submit">Log In</button>
           
        </form>


        {/* <p className="error-message">&nbsp;{error}</p> */}
        </section>
        </div>
    )


    
}
// className="signup-grid"