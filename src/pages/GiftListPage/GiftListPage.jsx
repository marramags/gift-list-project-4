import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';
// import { deleteOne } from "../../../models/recipient";
import { useNavigate } from "react-router-dom";
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
        <h1>Gifting List</h1>
        {/* {giftItemList} */}
        
        {giftList.map(function(gift, index) {
          if (user && (user._id === gift.user)) {
        return <ul>
          {gift.name} <br/> 
          {gift.relationType} <br/> 
          {gift.complete}<br/> 
        {gift.giftItems[0].item}<br/> 
        ${gift.giftItems[0].price}<br/> 
        {gift.giftItems[0].storeLink}<br/> 

        {/* {{gift.giftItems} {index[0]}} */}
        
  

        <div>
          
        <label>Completed</label>
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
        </div>
       
        {/* <button 
                onClick={()=>{handleDelete(item.text)}}
                ><h3>{item.completed ? "❌" : "✔️"}</h3></button> */}
        <button onClick={()=>handleDelete(gift._id)}>delete</button></ul>
        }
      })}


        
        {/* {giftItemList} */}
        <NewGiftForm user={user} setGifts={setGifts} />
      
        {/* <h2>Categories</h2>
      {showCategories()}
      <h2>Form Data</h2>
      {JSON.stringify(...formData)} */}
        </>
    )
}

    //testing
//     const handleToggle = c => () => {
//       const clickedCategory = checked.indexOf(c);
//       const all = [...checked];

//       if (clickedCategory === -1) {
//         all.push(c);
//       } else {
//         all.splice(clickedCategory, 1);
//       }
//       console.log(all);
//       setChecked(all);
//       formData.set('categories', all);
//     }

//     const showCategories = () => {
//       return categories.map((c, i) => (
//         <li key={i} className="list-unstyled">
//           <input
//           onChange={handleToggle(c._id)}
//           type='checkbox'
//           className='mr-2'
//           />
//  <label className="form-check-label">{c.name}</label>
//         </li>
//       ))
//     }