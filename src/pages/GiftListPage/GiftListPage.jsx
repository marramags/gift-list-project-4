import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';
// import { deleteOne } from "../../../models/recipient";
import { useNavigate } from "react-router-dom";
import './GiftListPage.css'
// import GiftItem from "../GiftItem/GiftItem";


export default function GiftListPage({gifts, user, setGifts}) {

    const [giftList, setGiftList] = useState([])

    const [state, setState] = useState({complete:false})
  
    const navigate = useNavigate();
    // const [giftData, setGiftData] = useState("");
    // const [checkedGift, setCheckedGift] = useState([]);
    // const [giftCategories, setGiftCategories] = useState([])

    useEffect(function() {
        async function getList() {
          const allGifts = await giftsAPI.getAll();
          setGiftList(allGifts);
          // console.log(allGifts[11].name)
          // console.log(allGifts[11].relationType)
          // console.log(allGifts[11].giftItems)
        }
        getList();
      }, [])


      console.log(giftList)

      // console.log(giftList[0].name)
      // console.log(giftList[0].relationType)
      // console.log(giftList[0].giftItems)
      // console.log(giftList[1].giftItems[0].item)
      // let test1 =[];
      // giftList.forEach((p)=> {
      //   giftList.giftItems.forEach((g) => {
      //     test1.push(g)
      //     console.log(g)
      //   })
      // })
      


    // const giftItemList = giftList.map((g, index) => {(
    //     <GiftItem value={g} index={index} key={index} />
    //   )});
    // console.log(`GL Page: ${giftItemList}`)


    // console.log(user._id)
    // const realId = user._id

    async function handleChange (e, id, check){
      // setGiftList(completedGift)
      // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
      // setState({
      //   ...state,
      //   [e.target.name]: value,
      // })
      // console.log(e.target.)
      check ? setState(false) : setState(true)
      // setState(()=>{state.complete ? false : true})
      // setState(!state.complete)
      const completedGift = await giftsAPI.completeGifts(id, state.complete);
      // console.log(`value: ${value}`)
      
    }
    

  
    async function handleDelete(id) {
      const deletingGift = await giftsAPI.deleteGift(id);
      console.log(`delete: ${deletingGift}`)
      navigate('/giftlist')
      window.location.reload();
    };


    return(
        <>
        <section className="img">
        <h1>Gift List</h1>
        <NewGiftForm user={user} setGifts={setGifts} />
        </section>
      <hr></hr>
        {/* {giftItemList} */}
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
          {/* <td> {gift.complete} </td> */}
          <td>{gift.giftItems[0].item}</td>
          <td> ${gift.giftItems[0].price} </td>
          <td> <span className="storeLink">{gift.giftItems[0].storeLink}</span></td>
        {/* </tr> */}
        {/* {{gift.giftItems} {index[0]}} */}
        
  

        {/* <div> */}
        <td>
        <label></label>
        <input type="checkbox" 
                onChange={(e) => handleChange(e, gift._id, gift.complete)}
                //if statement if user is this then do this
                // onChange={handleChange()}
                // change the 
                  checked={state.complete}
                name="complete"
                
                  // when clicked, it is true
                // checkbox is true
                // {gift.complete ? }
                />
        {/* </div> */}
        </td>
        {/* <button 
                onClick={()=>{handleDelete(item.text)}}
                ><h3>{item.completed ? "❌" : "✔️"}</h3></button> */}
                <td>
        <button onClick={()=>handleDelete(gift._id)}>x</button></td>
        </tr>
        }
      })}
    </table>


        </>
    )
}

  