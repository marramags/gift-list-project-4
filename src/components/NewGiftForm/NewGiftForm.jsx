import { useState } from "react";
import * as usersService from '../../utilities/users-service';

export default function NewGiftForm() {

    //endpoint to the database

    const [gift, setGift] = useState({
        name: '',
        relationType: '',
        item:'',
        description:'',
        storeLink:'',
        bought:''
    })

    const [error, setError] = useState('');


    function handleChange(evt) {
        setGift({...gift,  [evt.target.name]:evt.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.addGift(credentials);
      setGift(gift);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

    return (
        <div>
        <h2>Add a Gift!</h2>
        <form>
            <label>Recipient Name</label>
            <input type="text" name="name"/>
            <label>Relation Type</label>
            <select type="text" name="relationType">
                {/* <option style="display:none"></option> */}
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Partner">Partner</option>
                <option value="Co-worker">Co-worker</option>
                <option value="Other">Other</option>
            </select>
            <label>Gift Item</label>
            <input type="text" name="item"/>
            <label>Description</label>
            <input type="text" name="description"/>
            <label>Store/Link</label>
            <input type="text" name="storeLink"/>
            <label>Bought?</label>
            <select type="text" name="bought">
                {/* <option style="display:none"></option> */}
                <option value="false">false</option>
                <option value="true">true</option>
            </select>
            <button type="submit">ADD GIFT</button>
        </form>
        </div>
    )
}