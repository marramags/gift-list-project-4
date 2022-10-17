import {Link} from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({user, setUser}){

    function handleLogOut(){
        usersService.logOut();
        setUser(null)
    }

    return(
        <nav>
            <ul>
            <li ><Link to="/">
                <img className='nav-img' 
                src="https://i.imgur.com/t8vyIjz.png" title="The Gifting List" />
                <span className='logo-name'>The Gifting List</span></Link> </li>
            
            &nbsp;
            &nbsp;               
            <li ><Link to="/giftlist">Gift List</Link></li>
            &nbsp; | &nbsp;
            <li > <Link to="/recipients">Recipients</Link>  </li>
            &nbsp; | &nbsp;
            Welcome, {user.name}!
            &nbsp; | &nbsp;
            <li ><Link to="" onClick={handleLogOut} >Log Out</Link></li>
            </ul>
        </nav>
    )
}

{/* <span className='test-name'></span> */}
// className='test-link'