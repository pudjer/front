import {useParams} from "react-router-dom";
import {branchApi} from "../../services/BranchApi/branchApi";
import DAG from "../DAG/DAG";
import styles from "./BranchView.module.css"
interface Params {
    slug: string;
}

// In your React component:
const ReBranchView: React.FC = () => {
    const params = useParams<keyof Params>() as Params;
    const { data, isLoading, error } = branchApi.useFetchreBranchQuery(params.slug);


    return (
        <>
            {isLoading && 'LOADING'}
            {error && 'ERROR'}
            {data && <DAG className={styles.DAG} data={data}/>}
        </>
    );
};


export default ReBranchView;
