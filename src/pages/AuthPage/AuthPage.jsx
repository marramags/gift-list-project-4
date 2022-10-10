import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

export default function AuthPage({setUser}) {
    return (
        <>
        <h2>Auth Page</h2>
        <SignupForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </>
    )
}