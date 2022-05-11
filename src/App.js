import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [done,setDone] = useState(false)   

  useEffect(() => {

     

  const strodUserLoggedInfo =  localStorage.getItem('isLoggedIn');
  if(strodUserLoggedInfo === '1'){  
    setIsLoggedIn(true)
  }

  },[]) 

  const loginHandler = (email, password) => {

    localStorage.setItem('isLoggedIn','1'); 
    setIsLoggedIn(true); 

  };

  const logoutHandler = () => {   
    localStorage.removeItem('isLoggedIn') 
    setIsLoggedIn(false);
  };
console.log(done)
  return (
    <React.Fragment>
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler,onLogin:loginHandler,onClick:setDone,done:done}}>
      <MainHeader/>
      <main style={{backgroundColor:!done ? 'white' : '#092c3e',height:'700px'}}>

        {!isLoggedIn && <Login />}

        {isLoggedIn && <Home onLogout={logoutHandler} />}

      </main>
        
      </AuthContext.Provider>
      
    </React.Fragment>
  );
}

export default App; 
