import {INode} from "../../models/Branch";

interface PropsNode{
    node: INode
}

const Label = (props: PropsNode) => {
    return <div>
        {props.node.title}
    </div>
}

export default Label;