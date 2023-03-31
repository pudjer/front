export interface IOtherUser{
    username: string;
    first_name: string;
    last_name: string;
    date_joined: string;
}

export interface IUser extends  IOtherUser{
    email: string

}