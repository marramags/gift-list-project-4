import './AuthPage.css';
import {useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

export default function AuthPage({setUser}) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <div className='auth-page'>
        <h2 onClick={() => setShowLogin(!showLogin)}> {showLogin ?  'LOG IN' : 'SIGN UP'} </h2>
        </div>
        {showLogin ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/>}
        </>
    )
}