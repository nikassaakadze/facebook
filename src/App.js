import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import {auth} from './firebase'
import Login from './Components/Login'
import Widget from './Components/Widget'
import {UserProvider} from './UserContext'
import {userContext} from './UserContext'

function App() {

  const [user, setUser] = useState(0)
  useEffect(()=>{
    auth.onAuthStateChanged(function(authUser) {
      if (authUser) {
        setUser(authUser)
      } else {
        // No user is signed in.
      }
    });
      },[])
  
  return (
    <UserProvider>
    <div className="App">
      {user ?(
        <>
        <Header />
        <div className="app__body">
          <Sidebar userName={user.displayName} userAvatar={user.photoURL} />
          <Feed/>
          <Widget/>
        </div>
        </>
      ):(
        <Login/>
      )}
    </div>
    </UserProvider>
  );
}

export default App;
