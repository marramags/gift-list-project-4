import NewGiftForm from "../../components/NewGiftForm/NewGiftForm"

export default function GiftListPage({gifts, user, setGifts}) {

    // const giftingList = gifts.map((g, index) => (
    //     <ToDoListItem value={t} index={index} />
    //   ));

    return(
        <>
        <h1>Gifting List</h1>
        <ul>

            <NewGiftForm user={user} setGifts={setGifts} />
        </ul>
        </>
    )
}