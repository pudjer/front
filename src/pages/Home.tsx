import {useAppSelector} from "../hooks/redux";
import {useAppDispatch} from "../hooks/redux";
import {logout} from "../store/reducers/userReducer";
import LoginPage from "./LoginPage";
import Profile from "../components/Profile/Profile";
import {IUser} from "../models/User";


const Home = () =>{
    const auth = useAppSelector(state => state.auth)


    return <>
        <Profile user={auth.user as IUser}/>
    </>
}

export default Home;