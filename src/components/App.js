import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import {authService} from '../firebase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  })
  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing...."}
    <footer>&copy; {new Date().getFullYear()} kwiter</footer>
    </>
  );
}

export default App;
