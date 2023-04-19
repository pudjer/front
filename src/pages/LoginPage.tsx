import LoginForm from "../components/Login/LoginForm/LoginForm";
import React, {ReactNode, useState} from "react";
import RegisterForm from "../components/Login/RegisterForm/RegisterForm";
import {useAppSelector} from "../hooks/redux";
import {Navigate, useLocation} from "react-router-dom";

const LoginPage = () => {
    const [selValue, setSelValue] = useState("вход");
    const auth = useAppSelector((state) => state.auth);
    const loc = useLocation()
    if (auth.isAuthenticated){
        if(loc?.state?.from){
            return <Navigate to={loc.state.from}/>
        }else{
            return <Navigate to={''}/>
        }
    }



    const selHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelValue(e.target.value);
    };

    return (
        <>
            <select value={selValue} onChange={selHandler}>
                <option value="регистрация">Регистрация</option>
                <option value="вход">Вход</option>
            </select>
            {selValue === "вход" ? <LoginForm /> : <RegisterForm />}
        </>
    );
};

export default LoginPage;