import React, {useState, createContext, useEffect} from 'react'
import {auth} from './firebase'

export const UserContext = createContext()

export const UserProvider = (props) => {

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

	return(
		<UserContext.Provider value={[user, setUser]} >
			{props.children}
		</UserContext.Provider>
	)
}