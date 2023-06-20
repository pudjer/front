import React, {useEffect} from 'react';
import AppRouter from "./routes/AppRouter";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {login} from "./store/reducers/userReducer";



function App() {
    const auth = useAppSelector(store=>store.auth)
    const dispatch = useAppDispatch()
    useEffect(()=>{
            dispatch(login())
    }, [])



    return <>
        {!auth.isLoading && <AppRouter/>}
        {auth.error && auth.error}
    </>

}

export default App;
