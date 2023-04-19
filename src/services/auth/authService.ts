import api from "./authApi";
import {LoginResponse, RegistrationResponse} from "../../models/LoginResponse";
import {IUser} from "../../models/User";
import axios from "axios";
import {BackendUrl} from "../domainname";

export default class AuthService {
    static async login(username: string, password: string): Promise<void> {
        const response = await axios.post<LoginResponse>(BackendUrl+'auth/jwt/create/', {username, password})
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
    }


    static async registration(email: string, username: string, password: string): Promise<void> {
        await api.post<RegistrationResponse>('auth/users/', {email, username, password})
        await this.login(username, password)
    }


    static async getUser(): Promise<IUser> {
        const response =  await api.get('common/user/')
        return response.data
    }

}
