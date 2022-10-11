import './App.css';
import GiftListPage from '../GiftListPage/GiftListPage'; 
import AuthPage from '../AuthPage/AuthPage';
import Recipients from '../Recipients/Recipients';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {

  const giftArray = [
    {name:"Jeryl", relation: "husband", item:"movie poster", description: 'Marvel movie poster', storeLink:'greymatterart.com'}
  ]

  const [user, setUser] = useState(getUser())

  return (
    <div className="App">
      <h1>The Gifting List</h1>
      
      { user ?
      // <GiftListPage />
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/giftlist" element={<GiftListPage />} />
        <Route path="/recipients" element={<Recipients />} />

      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
      }
    </div>
  );
}

export default App;
