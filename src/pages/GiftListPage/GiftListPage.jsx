import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import { useState, useEffect } from "react";
import * as giftsAPI from '../../utilities/gifts-api';

// import GiftItem from "../GiftItem/GiftItem";

export default function GiftListPage({gifts, user, setGifts}) {

    const [giftList, setGiftList] = useState([])

    useEffect(function() {
        async function getList() {
          const allGifts = await giftsAPI.getAll();
          setGiftList(allGifts);
          console.log(allGifts)
          console.log(allGifts[11].name)
          console.log(allGifts[11].relationType)
          console.log(allGifts[11].giftItems[0])
        }
        getList();
      }, [])




    // const giftItemList = gifts.map((g, index) => (
    //     <GiftItem value={g} index={index} />

    //   ));

    // console.log(`GL Page: ${giftItemList}`)



    return(
        <>
        <h1>Gifting List</h1>
        {/* {giftItemList} */}
        <ul>
        {giftList.map(function(gift, index) {
        return <h2>{gift.name} {gift.relationType} 
        {/* {{gift.giftItems} {index[0]}} */}
        &nbsp; 
        <button>delete</button></h2>
      })}
        </ul>
        <NewGiftForm user={user} setGifts={setGifts} />

        </>
    )
}