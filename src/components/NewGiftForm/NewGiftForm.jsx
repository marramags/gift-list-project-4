import { useState } from "react";
// import * as usersService from '../../utilities/users-service';
import * as giftsAPI from '../../utilities/gifts-api';
import { useNavigate } from "react-router-dom";
import './NewGiftForm.css'

export default function NewGiftForm({user, setGifts}) {

    //endpoint to the database

    const [giftInfo, setGiftInfo] = useState({
        user: user,
        name: '',
        relationType: '',
        item:'',
        price:'',
        // description:'',
        storeLink:'',
        // bought:''
    })

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [giftText, setGiftText] = useState('');


    function handleChange(evt) {
        setGiftInfo({...giftInfo,  [evt.target.name]:evt.target.value});
        setGiftText('');
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const gift = await giftsAPI.addGift(giftInfo); //create
      setGifts(gift);
      evt.target.reset();
      navigate('/giftlist')

      window.location.reload();
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
        <form className="NewGiftForm" autoComplete="off" onSubmit={handleSubmit}>
            <div>
            {/* <label>Recipient Name</label> */}
            <input type="text" name="name" value={giftInfo.name} placeholder="Name*" onChange={handleChange} required/>
            </div>
            <div>
            {/* <label>Relation Type</label> */}
            <select className="relationOptions" type="text" name="relationType" value={giftInfo.relationType} onChange={handleChange} required>
                {/* <option style="display:none"></option> */}
                <option >Choose One*</option>
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Partner">Partner</option>
                <option value="Co-worker">Co-worker</option>
                <option value="Other">Other</option>
            </select> 
            </div>
            <div>
            {/* <label>Gift Item</label> */}
            <input type="text" name="item" value={giftInfo.item} placeholder="Gift Item*" onChange={handleChange} required/>
            </div>
            <div>
            {/* <label>Price</label> */}
            <input type="text" name="price" value={giftInfo.price} placeholder="Price" onChange={handleChange} />
            </div>
            <div>
            {/* <label>Store/Link</label> */}
            <input type="text" name="storeLink" value={giftInfo.storeLink} placeholder="Store" onChange={handleChange}/>
            {/* <label>Bought?</label>
            <select type="text" name="bought" value={giftInfo.bought} onChange={handleChange} required>
                <option style="display:none"></option>
                <option value="false">No</option>
                <option value="true">Yes</option>
            </select> */}
            </div>
            <button type="submit">ADD GIFT</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>

        </div>
    )
}