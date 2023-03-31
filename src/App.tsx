import React, {useEffect, useState} from 'react';
import AppRouter from "./Routes/AppRouter";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {setUser} from "./store/reducers/userReducer";




function App() {
    const auth = useAppSelector(store=>store.auth)
    const dispatch = useAppDispatch()
    useEffect(()=>{

        if(!auth.isAuthenticated){
            dispatch(setUser())
        }
    }, [])

    return <>
            <AppRouter/>
    </>

}

export default App;
