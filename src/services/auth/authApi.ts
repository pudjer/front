import axios, {AxiosError} from 'axios';
import {BackendUrl} from "../domainname";
import {LoginResponse} from "../../models/LoginResponse";


const api = axios.create({
  baseURL: BackendUrl,
});


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
    config.headers.Authorization = `Bearer ${token}`
    }
    return config})

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if(error.hasOwnProperty('response')) {
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Replace 'refresh' with the correct path to your refresh endpoint
                const response = await api.post<LoginResponse>('auth/jwt/refresh/', {
                    // Add any required data for refreshing the token
                    refresh: localStorage.getItem('refreshToken'),
                });

                // Update the tokens in the local storage
                localStorage.setItem('token', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);

                // Update the Authorization header with the new access token
                originalRequest.headers.Authorization = `Bearer ${response.data.access}`;

                // Retry the original request with the updated token
                return api.request(originalRequest);
            } catch (err) {
                if(err instanceof Error){
                    return Promise.reject(err.message)
                }

            }
        }
    }
      if(error instanceof Error){
          return Promise.reject(error.message)
      }
  }
);

export default api;