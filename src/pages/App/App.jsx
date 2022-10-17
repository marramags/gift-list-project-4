import './App.css';
import GiftListPage from '../GiftListPage/GiftListPage'; 
// import NewGiftForm from '../../components/NewGiftForm/NewGiftForm';
import AuthPage from '../AuthPage/AuthPage';
import Recipients from '../Recipients/Recipients';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';
import Homepage from '../Homepage/Homepage';

function App() {

  // const giftArray = [
  //   {name:"Jeryl", relation: "Partner", item:"movie poster", description: 'Marvel movie poster', storeLink:'greymatterart.com'}
  // ]

  const [user, setUser] = useState(getUser())
  const [gifts, setGifts] = useState([]);
  // const [showGifts, setShowGifts] = useState(true)

  

  return (
    <div className="App">
      {/* <NavBar user={user} setUser={setUser}/> */}
      {/* <h1>The Gifting List</h1> */}
      {/* <Homepage/> */}
      
      { user ?
      // <GiftListPage />
      <>
      <NavBar user={user} setUser={setUser}/>
      {/* <Homepage user={user} setUser={setUser}/> */}
      <Routes>
        <Route path="/" element={<Homepage user={user} />} />
        <Route path="/giftlist" element={<GiftListPage gifts={gifts} user={user} setGifts={setGifts}/>} />
        <Route path="/recipients" element={<Recipients user={user}/>} />
        

      </Routes>
      </>
      :
      <>
      <AuthPage setUser={setUser}/>
      {/* <Homepage user={user} setUser={setUser}/> */}
      </>
      }
      
    </div>
  );
}

export default App;
