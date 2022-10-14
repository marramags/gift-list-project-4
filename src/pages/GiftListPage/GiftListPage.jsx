import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';
// import { deleteOne } from "../../../models/recipient";
import { useNavigate } from "react-router-dom";
// import GiftItem from "../GiftItem/GiftItem";


export default function GiftListPage({gifts, user, setGifts}) {

    const [giftList, setGiftList] = useState([])

    const [state,setState] = useState({
      complete:false,
    })
  
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


      // console.log(giftList)

      // console.log(giftList[0].name)
      // console.log(giftList[0].relationType)
      // console.log(giftList[0].giftItems)
      // console.log(giftList[0].giftItems[0].item)
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

    async function handleChange (e, id){
      // setGiftList(completedGift)
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
      setState({
        ...state,
        [e.target.name]: value,
      })
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
        <ul>
        {giftList.map(function(gift, index) {
        return <h2>{gift.name} {gift.relationType} {gift.complete}
        {/* {gift.giftItems[0].item} */}
        {/* {{gift.giftItems} {index[0]}} */}
        &nbsp; 
        {/* <button 
                onClick={()=>{handleDelete(item.text)}}
                ><h3>{item.completed ? "❌" : "✔️"}</h3></button> */}
        &nbsp;
        {/* {showCategories()} */}
        {/* <button onClick={'/'}>Edit</button> */}
        &nbsp;

        <div>
          
        <label>Completed</label>
        <input type="checkbox" 
                onChange={(e) => handleChange(e, gift._id)}
                //if statement if user is this then do this
                // onChange={handleChange()}
                checked={state.complete}
                name="complete"
                  // when clicked, it is true
                // checkbox is true
                // {gift.complete ? }
                />
        </div>
        &nbsp;
        {/* <button 
                onClick={()=>{handleDelete(item.text)}}
                ><h3>{item.completed ? "❌" : "✔️"}</h3></button> */}
        <button onClick={()=>handleDelete(gift._id)}>delete</button></h2>
      })}


        </ul>
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