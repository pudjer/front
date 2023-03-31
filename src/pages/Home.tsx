import {useAppSelector} from "../hooks/redux";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useAppDispatch} from "../hooks/redux";
import {logout} from "../store/reducers/userReducer";
import Login from "../components/Login";


const Home = () =>{
    const auth = useAppSelector(state => state.auth)
    const dispath = useAppDispatch()
    const Logout = () =>{
    dispath(logout())
    }

    return <>
        {auth.isAuthenticated && <button onClick={Logout}>logout</button>}
        {auth.isAuthenticated && JSON.stringify(auth.user)}
        {!auth.isAuthenticated && <Login/>}
    </>
}

export default Home;