import {createContext, useState} from "react";

let AuthContext = createContext(null);

function AuthProvider({children}) {

    let [user, setUser] = useState(null);

    let logIn = (newUser, cb) =>{
        setUser(newUser);
        cb();
    }

    let logOut = (cb) =>{
        setUser(null);
        cb();
    }

    let value = {user, logIn, logOut};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext};

