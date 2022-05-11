import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:() => {},  
    onLogin:() => {},
    onClick:false,
    done:false,
});

export default AuthContext