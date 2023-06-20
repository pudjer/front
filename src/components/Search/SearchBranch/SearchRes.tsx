import {INode} from "../../../models/Branch";
import Label from "./Label";
import React from "react";


interface Item{
    title:string,
}

export const SearchRes = (nodes:Item[]) => {
    return nodes.map((node) => ({
        label: (
            <Label node={node}/>
        ),
        value: node.title,
        ...node
    }));
}

export const onSelect = (navigate:(url:string)=>void, value: string, option: INode ) => {
    navigate(`node/${option.slug}/show_branch`)
};