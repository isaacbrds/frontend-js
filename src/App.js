import './App.css'
import {db} from './firebase.js'
import {useEffect, useState} from 'react'

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    console.log(db)
  }, [])


  return (
    <div className="App">
      <div className='header'>
        <div className='header__logo'>
        <img src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
        </div>
        <div className='header__loginForm'>
          <form>
            <input type='text' placeholder='Login...'/>
            <input type='password' placeholder='Senha...'/>
            <input type='submit' value='Logar'/>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;
