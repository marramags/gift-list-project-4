import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';
import { useNavigate } from "react-router-dom";
import './GiftListPage.css'


export default function GiftListPage({gifts, user, setGifts}) {

    const [giftList, setGiftList] = useState([])

    const [state, setState] = useState({complete:false})
  
    const navigate = useNavigate();
    
    useEffect(function() {
        async function getList() {
          const allGifts = await giftsAPI.getAll();
          setGiftList(allGifts);
          
        }
        getList();
      }, [])


      console.log(giftList)

      
    async function handleChange (e, id, check){
      check ? setState(false) : setState(true)
      const completedGift = await giftsAPI.completeGifts(id, state.complete);
      
    }
    

  
    async function handleDelete(id) {
      const deletingGift = await giftsAPI.deleteGift(id);
      console.log(`delete: ${deletingGift}`)
      navigate('/giftlist')
      window.location.reload();
    };


    return(
        <>
        <div classname="pagebody">
        <section className="img">
        <h1>Gift List</h1>
        <NewGiftForm user={user} setGifts={setGifts} />
        </section>
        <table>
      <tr>
      <th>Giftee</th>
    <th>Relation</th>
    <th>Gift Item</th>
    <th>Price</th>
    <th>Store</th>
    <th>Purchased?</th>
    <th>Remove</th>

      </tr>
      
        {giftList.map(function(gift, index) {
          if (user && (user._id === gift.user)) {
        return <tr>
          <td>{gift.name}  </td>
          <td>{gift.relationType} </td>
          <td>{gift.giftItems[0].item}</td>
          <td> ${gift.giftItems[0].price} </td>
          <td> <span className="storeLink">{gift.giftItems[0].storeLink}</span></td>
      
        
  

    
        <td>
        <label class="main">
        <input className="checkbox" type="checkbox" 
                onChange={(e) => handleChange(e, gift._id, gift.complete)}
                
                  checked={state.complete}
                name="complete"
                />
                </label>
     
        </td>
        
                <td>
        <button onClick={()=>handleDelete(gift._id)}>x</button></td>
        <hr></hr>
        </tr>
        
        }
      })}
    </table>
    </div>

        </>
    )
}

  