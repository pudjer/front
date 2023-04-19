import React from "react";
import {IUser} from "../../models/User";

interface IUserProps{
    user:IUser
}

const Profile = ({user}:IUserProps) =>{
    return <>
        {JSON.stringify(user)}
    </>
}

export default Profile;