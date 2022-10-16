import './AuthPage.css';
import {useState} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";
// import NavBar from '../../components/NavBar/NavBar';


export default function AuthPage({setUser}) {

    const [showLogin, setShowLogin] = useState(true)

//     const myStyle={
//         backgroundImage: 
//  "url('https://images.unsplash.com/photo-1576072446580-32468f1b5439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
//         height:'100vh',
//         // marginTop:'-70px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };

    return (
        <>
        {/* <NavBar/> */}
        <section className='background-img'>
        <container className="signup-grid">
        {/* <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1576072446580-32468f1b5439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` ,
    //   height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: 0, marginLeft: "auto",marginRight: "auto",
    //   top: 0, justifyContent:'center',   position: 'fixed',   backgroundPosition: 'center center',
    //         backgroundAttachment:'fixed'
            width: '1000px',
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            margin:'0 auto',
            backgroundPosition: 'center center',
    
    }}> */}
              {/* <div style={myStyle}> */}
        {/* <div> */}
        <div className="authpage-info">     
        <h1 className="authpage-title">The Gifting List</h1>
        <div className='auth-page'>
        <h2 onClick={() => setShowLogin(!showLogin)}> {showLogin ?  'LOG IN' : 'SIGN UP'} </h2>
        </div>
        </div> 
        <div className='auth-forms'>
        {showLogin ? <LoginForm setUser={setUser}/> : <SignupForm setUser={setUser}/>}
        </div>
        {/* </div> */}
        </container>
        </section>
        </>
    )
}