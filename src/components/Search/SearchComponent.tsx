import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AutoComplete, Input, SelectProps } from 'antd';
import { INode } from '../../models/Branch';
import {debounce} from "../../utils/debounce";
import {useNavigate} from "react-router-dom";
import {BackendUrl} from "../../services/domainname";
import Label from "./Label";

const SearchComponent: React.FC = () => {
    const [options, setOptions] = useState<INode[]>([]);
    const navigate = useNavigate()
    const searchBranches = async (value: string) => {
        try {
            const response = await axios.get<INode[]>(
                `http://127.0.0.1:8000/search/node/?query=${value}`,
            );
            return response.data.map((node:INode) => ({
                label: (
                    <Label node={node}/>
                ),
                value: node.title,
                ...node
            }));
        } catch (error) {
            console.error('Error fetching articles:', error);
            return [];
        }
    };

    const handleSearch = async (value: string) => {
        const deb = debounce(async (value) => {
            const articles = await searchBranches(value);
            setOptions(value ? articles : [])}, 1000)
        deb(value)

    };

    const onSelect = (value: string, option: INode) => {
        // Perform actions with the selected option
        // For example, navigate to the article page using the id property
        navigate(`node/${option.slug}/show_branch`)

    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={onSelect}
            onChange={handleSearch}
        >
            <Input.Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
    );
};

export default SearchComponent;
