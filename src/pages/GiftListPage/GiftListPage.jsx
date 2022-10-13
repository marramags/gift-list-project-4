import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';
// import { deleteOne } from "../../../models/recipient";
import { useNavigate } from "react-router-dom";
// import GiftItem from "../GiftItem/GiftItem";


export default function GiftListPage({gifts, user, setGifts}) {

    const [giftList, setGiftList] = useState([])
    const navigate = useNavigate();

    useEffect(function() {
        async function getList() {
          const allGifts = await giftsAPI.getAll();
          setGiftList(allGifts);
          // console.log(allGifts)
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

    async function handleDelete(id) {
      // const filteredGifts = giftList.filter(g => g.name !== toDelete);
      // setGiftList(filteredGifts);
      // try{
        // deleteGift(id);
        await giftsAPI.deleteGift(id)
        const filteredGifts = giftList.filter( (g) => g._id !== id);
        console.log(filteredGifts)
        setGiftList(filteredGifts);
        navigate('/giftlist')
    //   } catch {
    //     console.log('try again')
    //   }
    };
  

    return(
        <>
        <h1>Gifting List</h1>
        {/* {giftItemList} */}
        <ul>
        {giftList.map(function(gift, index) {
        return <h2>{gift.name} {gift.relationType} 
        {/* {gift.giftItems[0].item} */}
        {/* {{gift.giftItems} {index[0]}} */}
        &nbsp; 
        <button onClick={()=>handleDelete(giftList._id)}>delete</button></h2>
      })}


        </ul>
        {/* {giftItemList} */}
        <NewGiftForm user={user} setGifts={setGifts} />

        </>
    )
}