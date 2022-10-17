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
            <li className='left-link'><Link to="/">
                <img className='nav-img' 
                src="https://i.imgur.com/t8vyIjz.png" title="The Gifting List" />
                <span className='logo-name'>The Gifting List</span></Link> 
            
            &nbsp;
            &nbsp;   </li>            
            <li className='right-link'><Link to="/giftlist">Gift List</Link>
            &nbsp; | &nbsp;</li>
            <li className='right-link'> <Link to="/recipients">Recipients</Link>  
            &nbsp; | &nbsp;</li>
            <li className='right-link'>Welcome, {user.name}!
            &nbsp; | &nbsp;</li>
            <li className='right-link'><Link to="" onClick={handleLogOut} >Log Out</Link></li>
            </ul>
        </nav>
    )
}

