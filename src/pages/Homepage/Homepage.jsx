// import NavBar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import './Homepage.css'

export default function Homepage() {
    return (
        <>
        <h1 className="home-title">The Gifting List</h1>
        <div className="quote-background">
       <h3 className="shopping-quote"> 
       "I SHOULD PROBABLY START CHRISTMAS SHOPPING BUT I KEEP BUYING THINGS FOR MYSELF"
       
       </h3>
       <img className="home-img" src="https://i.imgur.com/H7gc98J.png" title="source: imgur.com" />
       </div>
       
       <div className="link-placement"> <Link className="gift-link" to="/giftlist">Let's get gifting!</Link></div>
        </>
    )
}