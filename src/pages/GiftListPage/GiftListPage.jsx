import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';
// import { deleteOne } from "../../../models/recipient";
import { useNavigate } from "react-router-dom";
// import GiftItem from "../GiftItem/GiftItem";


export default function GiftListPage({gifts, user, setGifts}) {

    const [giftList, setGiftList] = useState([])
  //   const [formData, setFormData] = useState("");
  // const [checked, setChecked] = useState([]);
  // const [categories, setCategories] = useState([
  //   { _id: "5d7c7653427efd4400201e0e", name: "JavaScript", slug: "javascript" },
  //   { _id: "5d7c7662427efd4400201e11", name: "VueJs", slug: "vuejs" },
  //   { _id: "5d7c79df427efd4400201e1e", name: "Firebase", slug: "firebase" }
  // ]);
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

    // async function handleDelete(id) {
    //   // const filteredGifts = giftList.filter(g => g.name !== toDelete);
    //   // setGiftList(filteredGifts);
    //   // try{
    //     // deleteGift(id);
    //     await giftsAPI.deleteGift(id)
    //     const filteredGifts = giftList.filter( (g) => g._id !== id);
    //     console.log(filteredGifts)
    //     setGiftList(filteredGifts);
    //     navigate('/giftlist')
    // //   } catch {
    // //     console.log('try again')
    // //   }
    // };

    async function handleDelete(id) {
      const deletingGift = await giftsAPI.deleteGift(id);
      console.log(`delete: ${deletingGift}`)
      navigate('/giftlist')
      window.location.reload();
    };
  
//     useEffect(() => {
//       setGiftData(new giftData());
//     }, []);    
    
//     const handleToggle = c => () => {
//       const clickedCategory = checked.indexOf(c);
//       const all = [...checked];

//       if (clickedCategory === -1) {
//         all.push(c);
//       } else {
//         all.splice(clickedCategory, 1);
//       }
//       console.log(all);
//       setCheckedGift(all);
//       formData.set('categories', all);
//     }

//     const showCategories = () => {
//       return giftList.map((c, i) => (
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
        <button onClick={'/'}>Edit</button>
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