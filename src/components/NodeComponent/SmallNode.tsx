import {INode} from "../../models/Branch";
import styles from './SmallNode.module.css'

interface NodeProps{
    node: INode
}

const SmallNode = ({ node }: NodeProps) => {
    return (
        <div className={styles.root}>
            <h3>{node.title}</h3>
            <p>Author: {JSON.stringify(node.author)}</p>
            <p>Content length: {node.contentlen}</p>
            <p>Likes: {node.likes}</p>
            <p>Views: {node.views}</p>
            <p>Language: {node.language}</p>
            <p>Tags: {node.tags.join(', ')}</p>
        </div>
    );
};

export default SmallNode