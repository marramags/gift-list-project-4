import NewGiftForm from "../../components/NewGiftForm/NewGiftForm";
// import GiftItem from "../GiftItem/GiftItem";

export default function GiftListPage({gifts, user, setGifts}) {

    // const giftItemList = gifts.map((g, index) => (
    //     <GiftItem value={g} index={index} />

    //   ));

    // console.log(`GL Page: ${giftItemList}`)



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