import './AuthPage.css';
import {useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

export default function AuthPage({setUser}) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className='background'>
        
        <section className="signup-grid" >
            <div className="auth-logo-background">
        <img className="auth-logo" src="https://i.imgur.com/t8vyIjz.png" title="source: imgur.com" />
        </div>
        <div className="authpage-info">     
        <h1 className="authpage-title">The Gifting List</h1>
      
        </div> 
        <div className='auth-forms'>
        {showLogin ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/> }
        </div>
        
        <div className='user-options'>
        &nbsp; 
        <span className='user-options-link' onClick={() => setShowLogin(!showLogin)}> {!showLogin ?  'LOG IN HERE' : 'SIGN UP HERE'}</span>
        </div>
        
     
       
        </section>
        </div>
    )
}