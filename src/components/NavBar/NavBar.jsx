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
<a href="https://imgur.com/j1FpRgw"><img className='nav-img' src="https://i.imgur.com/j1FpRgw.png" title="source: imgur.com" /></a>            <Link to="/giftlist">Gift List</Link>
            &nbsp; | &nbsp;
            <Link to="/recipients">Recipients</Link>  
            &nbsp; | &nbsp;
            Welcome, {user.name}!
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}