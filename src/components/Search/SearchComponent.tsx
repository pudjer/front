import React, {ReactElement, useState} from 'react';
import { AutoComplete, Input} from 'antd';
import {debounce} from "../../utils/debounce";

import {NavigateFunction, useNavigate} from "react-router-dom";


interface Item{
    title:string,
}

interface PropsNode{
    node:{title: string}

}
interface IProps<T> {
    searchItems: (value: string) => Promise<T[]>;
    onSelect: (nav: NavigateFunction, value: string, option: T) => void;
    item?: React.FC<PropsNode>;
}

const SearchComponent: React.FC<IProps<any>> = (props) => {
    const [options, setOptions] = useState<[]>([]);
    const nav = useNavigate()
    const SearchRes = (nodes:Item[]) => {



        return nodes.map((node) => ({
            label: (  // @ts-ignore
                <props.item node={node} />
            ),
            value: node.title,
            ...node
        }));
    }

    const searchBranches:(a:string)=>Promise<any> = async (value: string) => {
        try {
            const response = await props.searchItems(value)
            return SearchRes(response)
        } catch (error) {
            return [];
        }
    };

    const handleSearch = async (value: string) => {
        const deb = debounce(async (value) => {
            const articles = await searchBranches(value);
            if(value){
                setOptions(articles)
            }
            }, 1000)
        deb(value)

    };


    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={(value, option)=>props.onSelect(nav, value, option)}
            onChange={handleSearch}
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};

export default SearchComponent;
