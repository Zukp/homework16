import React from 'react';
import AuthContext from '../../store/auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useContext, useEffect } from 'react';


const MainHeader = (props) => {
  const context = useContext(AuthContext)
  
  return (
    <header className={`${classes['main-header']} `}>
      <h1>A Typical Page</h1>
       <label className={classes.label}>
         
      <input type={"checkbox"} onClick={() => context.onClick(prevState => !prevState )}/>
      <span className={classes.check}></span>
         
       </label>      
      <Navigation  onLogout={props.onLogout} />

    </header>
  );
};

export default MainHeader;
  