import { useState } from "react";
// import * as usersService from '../../utilities/users-service';
import * as giftsAPI from '../../utilities/gifts-api';
import { useNavigate } from "react-router-dom";

export default function NewGiftForm({user, setGifts}) {

    //endpoint to the database

    const [giftInfo, setGiftInfo] = useState({
        name: '',
        relationType: '',
        item:'',
        // complete:'',
        // description:'',
        // storeLink:'',
        // bought:''
    })

    const [error, setError] = useState('');
    const navigate = useNavigate();


    function handleChange(evt) {
        setGiftInfo({...giftInfo,  [evt.target.name]:evt.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const gift = await giftsAPI.addGift(giftInfo);
      setGifts(gift);
      evt.target.reset();
      navigate('/giftlist')

    //   window.location.reload();
      console.log(`handle submit giftinfo: ${gift}`)
    } catch {
      setError('Try adding gift again');
    }
  }



    return (
        <div>
        <ul>
        
        </ul>

        <h2>Add a Gift!</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Recipient Name</label>
            <input type="text" name="name" value={giftInfo.name} onChange={handleChange} required/>
            <label>Relation Type</label>
            <select type="text" name="relationType" value={giftInfo.relationType} onChange={handleChange} required>
                {/* <option style="display:none"></option> */}
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Partner">Partner</option>
                <option value="Co-worker">Co-worker</option>
                <option value="Other">Other</option>
            </select>
            <label>Gift Item</label>
            <input type="text" name="item" value={giftInfo.item} onChange={handleChange} required/>
            {/* <label>Description</label>
            <textarea type="text" name="description" value={giftInfo.description} onChange={handleChange} required/>
            <label>Store/Link</label>
            <input type="text" name="storeLink" value={giftInfo.storeLink} onChange={handleChange} required/>
            <label>Bought?</label>
            <select type="text" name="bought" value={giftInfo.bought} onChange={handleChange} required>
                <option style="display:none"></option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select> */}
            <button type="submit">ADD GIFT</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>

        </div>
    )
}