
interface PropsNode{
    node:{title: string}

}

const Label: React.FC<PropsNode>= (props: PropsNode) => {
    return <div>
        {props.node.title}
    </div>
}

export default Label;