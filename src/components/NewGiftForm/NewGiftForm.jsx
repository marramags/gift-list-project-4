import { useState } from "react";

export default function NewGiftForm() {

    // const [gift, setGift] = useState({

    // })

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
            <button type="submit">ADD GIFT</button>
        </form>
        </div>
    )
}