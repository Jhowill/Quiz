import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext ();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading, setLoading] = useState (true);

    useEffect (() =>{

        const loadStorageData = async () =>{
            const storageUser = await AsyncStorage.getItem('@Quiz:user');

            if (storageUser){
                setUser (storageUser);
                setLoading (false);
            }
            else {
                setLoading (false);
                setUser(null);
            }
        }
        loadStorageData();

    },[])

    function clear () {
        AsyncStorage.clear().then (()=>{setUser(null)})
    }

    async function userName ({name}) {
        await AsyncStorage.setItem('@Quiz:user', name)
        setUser(name)
    }

    return(
        <UserContext.Provider value={{signed: !!user,user:user,loading:loading,userName, clear}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;