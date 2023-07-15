import { Auth } from './components/Auth'
import './App.css';
import Cookies from "universal-cookie";
import { useState, useRef } from 'react';
import { Chat }from "./components/Chat"

const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auto-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);

  if (!isAuth) {
    return(
      <div><Auth setIsAuth={setIsAuth}/></div>
    )

    }

      return (
          <div className="App">
            {room ? (<div><Chat room = {room} /></div>) :
            (<div className='room'>
              <label>Enter Room Name:</label>
              <input ref= {roomInputRef}/>
              <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
              {console.log(roomInputRef)}
              </div>)
    }
          </div>
      )
}

export default App;
