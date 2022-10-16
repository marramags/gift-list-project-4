import './AuthPage.css';
import {useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
import NavBar from '../../components/NavBar/NavBar';

export default function AuthPage({setUser}) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <NavBar/>
        <h1>The Gifting List</h1>
        <div className='auth-page'>
        <h2 onClick={() => setShowLogin(!showLogin)}> {showLogin ?  'LOG IN' : 'SIGN UP'} </h2>
        </div>
        {showLogin ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/>}
        </>
    )
}