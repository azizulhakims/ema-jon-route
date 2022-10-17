import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';





export const AuthContext = createContext();
const auth = getAuth(app);




const UserContext = ({ children }) => {

    // const user = { email: 'abc' }

    const [user, setUser] = useState(null);


    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;