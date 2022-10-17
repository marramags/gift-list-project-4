// import NavBar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import './Homepage.css'

export default function Homepage() {
    return (
        <>
        {/* <NavBar/> */}
        <h1 className="home-title">The Gifting List</h1>
       <h3 className="shopping-quote"> I should probably start christmas shopping but I keep buying things for myself quote</h3>
       
       Let's go your list <Link to="/giftlist">HERE!</Link>
        </>
    )
}