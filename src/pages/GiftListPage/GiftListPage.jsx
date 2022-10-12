import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
import * as giftsAPI from '../../utilities/gifts-api';
import { useState, useEffect } from "react";

// import GiftItem from "../GiftItem/GiftItem";

export default function GiftListPage({gifts, user, setGifts}) {

    const [estimates, setEstimates] = useState([])

    // const giftItemList = gifts.map((g, index) => (
    //     <GiftItem value={g} index={index} />

    //   ));

    // console.log(`GL Page: ${giftItemList}`)
    useEffect(function() {
        async function getEstimates() {
          const estimates = await giftsAPI.getAll();
          setEstimates(estimates);
          console.log(estimates)
        }
        getEstimates();
      }, [])
    



    return(
        <>
        <h1>Gifting List</h1>
        {/* {giftItemList} */}
        <ul>
      
        </ul>
        <NewGiftForm user={user} setGifts={setGifts} />

        </>
    )
}