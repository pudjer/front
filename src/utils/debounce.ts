import {Callback} from "webpack-cli";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

export const debounce = (cb: Callback<any>, ms: number) =>{
    let timeout:TimeoutId
    return (...args:any)=>{
        clearTimeout(timeout)
        timeout = setTimeout(() => cb(...args), ms)
    }
}