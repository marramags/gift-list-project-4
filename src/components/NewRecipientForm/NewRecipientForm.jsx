import { useState } from "react"
import * as giftsAPI from '../../utilities/gifts-api';


export default function NewRecipientForm({setRecipient}) {

    const [recipientInfo, setRecipientInfo] = useState({
        name: '',
        relationType: '',
    })

    const [error, setError] = useState('');

    function handleChange(evt) {
        setRecipientInfo({...recipientInfo,  [evt.target.name]:evt.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const newRecipient = await giftsAPI.addRecipient(recipientInfo);
      setRecipient(newRecipient);
      evt.target.reset();
      console.log(`handle submit giftinfo: ${setRecipient}`)
    } catch {
      setError('Try adding giftee again');
    }
  }


    return(
        
        <div>
        <h2>add recipient</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Recipient Name</label>
            <input type="text" name="name" value={recipientInfo.name} onChange={handleChange} required/>
            <label>Relation Type</label>
            <select type="text" name="relationType" value={recipientInfo.relationType} onChange={handleChange} required>
                {/* <option style="display:none"></option> */}
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Partner">Partner</option>
                <option value="Co-worker">Co-worker</option>
                <option value="Other">Other</option>
            </select>
            <button type="submit">ADD GIFTEE</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>

            </div>
    )
}