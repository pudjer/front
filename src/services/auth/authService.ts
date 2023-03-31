import api from "./authApi";
import {LoginResponse, RegistrationResponse} from "../../models/LoginResponse";
import {IUser} from "../../models/User";
import axios from "axios";
import {BackendUrl} from "../domainname";

export default class AuthService {
    static async login(username: string, password: string): Promise<void> {
        try {
            const response = await axios.post<LoginResponse>(BackendUrl+'auth/jwt/create/', {username, password})
            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
        }catch (e){
            console.error(e)
        }

    }

    static async registration(email: string, username: string, password: string): Promise<RegistrationResponse> {
        return api.post<RegistrationResponse>('auth/users/', {email, username, password})
            .then(response => response.data)
    }

    static async getUser(): Promise<IUser> {

        const response =  await api.get('common/user/')
        return response.data


    }

}
