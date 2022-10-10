import {Link} from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar({user, setUser}){

    function handleLogOut(){
        usersService.logOut();
        setUser(null)
    }

    return(
        <nav>
            <Link to="/giftlist">Gift List</Link>
            &nbsp; | &nbsp;
            <Link to="/recipients">Recipients</Link>  
            &nbsp; | &nbsp;
            Welcome, {user.name}!
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}