import axios from "axios";
import {INode} from "../../models/Branch";


export const searchBranches = async (value: string) => {
        const response = await axios.get<INode[]>(
            `http://127.0.0.1:8000/search/node/?query=${value}`,
        );
        return response.data
};