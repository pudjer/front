import React, {useState} from "react";
import AuthService from "../../../services/auth/authService";
import {login} from "../../../store/reducers/userReducer";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

const RegisterForm = () =>{
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch()
    const auth = useAppSelector((state) => state.auth);

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        e.stopPropagation();
        await AuthService.registration(email, username, password)
        dispatch(login());
    };

    return<form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={auth.isLoading}>
            {auth.isLoading ? 'Loading...' : 'Login'}
        </button>
    </form>

}

export default RegisterForm;