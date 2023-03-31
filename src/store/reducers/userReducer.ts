
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AuthService from "../../services/auth/authService";
import {AppDispatch} from "../store";
import {IUser} from "../../models/User";

const initialState = {
    user: {},
    isAuthenticated: false,
    isLoading: false,
    error: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action:PayloadAction<IUser>) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = ''

        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.toString()
        },
        logoutUser: () => initialState,
    },
});

export const { loginRequest, loginSuccess, loginFailure, logoutUser } = authSlice.actions;

export const setUser = () => async (dispatch:AppDispatch) => {
    dispatch(loginRequest());
    try {
        const user = await AuthService.getUser()
        dispatch(loginSuccess(user));
    } catch (e) {
            dispatch(loginFailure(e));
    }
}

export const login = (username:string, password:string) => async (dispatch:AppDispatch) => {
    dispatch(loginRequest());
    try {
        await AuthService.login(username, password);
        const user = await AuthService.getUser()
        dispatch(loginSuccess(user));
    } catch (e) {
        dispatch(loginFailure(e));
    }
};


export const logout = () => async (dispatch:AppDispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    dispatch(logoutUser());

};

export default authSlice.reducer;
