import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {branchApi} from "../services/BranchApi/branchApi";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    [branchApi.reducerPath]: branchApi.reducer,
    auth: userReducer

});

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(branchApi.middleware)
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
