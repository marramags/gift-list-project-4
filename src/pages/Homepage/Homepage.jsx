// import NavBar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom"
import './Homepage.css'

export default function Homepage() {
    return (
        <>
        {/* <NavBar/> */}
        <h1 className="home-title">The Gifting List</h1>
        <div className="quote-background">
       <h3 className="shopping-quote"> 
       "I should probably start christmas shopping but I keep buying things for myself quote"
       {/* <img className="home-img"src="https://i.imgur.com/8IvBCQ9.png" title="source: imgur.com" /> */}
       <img className="home-img" src="https://i.imgur.com/H7gc98J.png" title="source: imgur.com" />
       {/* <img className="home-img" src="https://i.imgur.com/cEk9xw4.png" title="source: imgur.com" /> */}
       </h3>
       </div>
       
       <div className="gift-link"> <Link className="gift-link" to="/giftlist">Let's get gifting!</Link></div>
        </>
    )
}