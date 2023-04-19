import {createSlice} from "@reduxjs/toolkit";
import {IBranch} from "../../models/Branch";


interface BranchesState{
    branches: IBranch[];
    isLoading: boolean;
    error: string;

}

const initialState:BranchesState = {
    branches: [],
    isLoading: false,
    error: ''
};

export const branchSlice = createSlice({
    name: 'Branches',
    initialState,
    reducers:{

    }

});

export default branchSlice.reducer;