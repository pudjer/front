import {IOtherUser} from "./User";

export interface IBranch{
    id: number;
    title: string;
    content: string;
    author: IOtherUser;
    slug: string;
    likes: number;
    views: number;
    links: IBranch[];
    language: string;
    karma: number;
    time_create: string;
    time_update: string;
    tags: string[]

}

export interface INode{
    id: number;
    title: string;
    content: string;
    author: IOtherUser;
    slug: string;
    likes: number;
    views: number;
    links: string[];
    language: string;
    karma: number;
    time_create: string;
    time_update: string;
    tags: string[]

}

export interface ILinks{
    id: number;
    child: number;
    parent: number;

}

export interface IGraph{
    nodes: INode[];
    links: ILinks[]

}