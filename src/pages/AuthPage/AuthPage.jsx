import './AuthPage.css';
import {useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
// import NavBar from '../../components/NavBar/NavBar';


export default function AuthPage({setUser}) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <container className='background-img'>
        <section className="signup-grid" >
            <div className="auth-logo-background">
        <img className="auth-logo" src="https://i.imgur.com/t8vyIjz.png" title="source: imgur.com" />
        </div>
              {/* <div style={myStyle}> */}
        {/* <div> */}
        <div className="authpage-info">     
        <h1 className="authpage-title">The Gifting List</h1>
        {/* <div className='auth-page'>
        <h2 onClick={() => setShowLogin(!showLogin)}> {showLogin ?  'LOG IN' : 'SIGN UP'} </h2>
        </div> */}
        </div> 
        <div className='auth-forms'>
        {showLogin ? <SignupForm setUser={setUser}/> : <LoginForm setUser={setUser}/>}
        </div>
        
        <div className='user-options'>Already a member? 
        &nbsp; 
        <span className='user-options-link' onClick={() => setShowLogin(!showLogin)}> {showLogin ?  'LOG IN' : 'SIGN UP'}</span>
        </div>
        
        {/* </div> */}
       
        </section>
        </container>
        </>
    )
}