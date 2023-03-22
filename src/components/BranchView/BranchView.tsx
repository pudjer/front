import {useParams} from "react-router-dom";
import {branchApi} from "../../services/branchApi";
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';
import {useEffect} from "react";
import styles from './BranchView.module.css'
import NodeElement from "../NodeElement/NodeElement";
import { useNavigate } from 'react-router-dom';

interface Params {
    slug: string;
}

// In your React component:
const BranchView = () => {
    const params = useParams<keyof Params>() as Params;
    const { data, isLoading, error } = branchApi.useFetchBranchQuery(params.slug);
    const router = useNavigate()
    const routerfunc:(a:string)=>()=>void = (link: string) => () => router(link)



    useEffect(() => {
        if (data) {
            const g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(function() { return {}; });

            data.nodes.forEach((node) => {
                g.setNode(node.id.toString(), { label: NodeElement(node, routerfunc)});
            });

            data.links.forEach((link) => {
                g.setEdge(link.parent.toString(), link.child.toString());
            });
            var render = new dagreD3.render();

            var svg = d3.select("svg"),
                svgGroup = svg.append("g");

// Run the renderer. This is what draws the final graph.
            render(d3.select("svg g") as any, g as any);

        }
    }, [data]);

    return (
        <>
            {isLoading && 'LOADING'}
            {error && 'ERROR'}
            {data && (
                <div >
                    <svg style={styles}>
                    </svg>
                </div>
            )}
        </>
    );
};


export default BranchView;
