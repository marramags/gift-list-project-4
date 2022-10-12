import NewGiftForm from "../../components/NewGiftForm/NewGiftForm"
import NewRecipientForm from "../../components/NewRecipientForm/NewRecipientForm"

export default function GiftListPage({gifts, user, setGifts, recipient, setRecipient}) {

    // const giftingList = gifts.map((g, index) => (
    //     <ToDoListItem value={t} index={index} />
    //   ));

    return(
        <>
        <h1>Gifting List</h1>
        <ul>
            <NewRecipientForm user={user} setGifts={setGifts}
            recipient={recipient} setRecipient={setRecipient}/>
            <NewGiftForm user={user} setGifts={setGifts} />
        </ul>
        </>
    )
}