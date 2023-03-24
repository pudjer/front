import {useParams} from "react-router-dom";
import {branchApi} from "../../services/branchApi";
import DAG from "../DAG/DAG";

interface Params {
    slug: string;
}

// In your React component:
const BranchView = () => {
    const params = useParams<keyof Params>() as Params;
    const { data, isLoading, error } = branchApi.useFetchBranchQuery(params.slug);


    return (
        <>
            {isLoading && 'LOADING'}
            {error && 'ERROR'}
            <DAG data={data}/>
        </>
    );
};


export default BranchView;
