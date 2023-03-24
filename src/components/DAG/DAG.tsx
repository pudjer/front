import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';
import {useEffect} from "react";
import styles from './DAG.module.css'
import NodeElement from "../NodeElement/NodeElement";
import { useNavigate } from 'react-router-dom';
import {IGraph} from "../../models/Branch";


const DAG = ({data}:{data:IGraph | undefined}) => {
    const router = useNavigate()
    const routerfunc:(a:string)=>()=>void = (link: string) => () => router(link)

    useEffect(() => {

        if (data) {
            const g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(function() { return {}; });

            const deleters:(()=>void)[] = [];

            data.nodes.forEach((node) => {
                let [label, deleter]= NodeElement(node, routerfunc)
                deleters.push(deleter)
                g.setNode(node.id.toString(), { label: label});
            });

            data.links.forEach((link) => {
                g.setEdge(link.parent.toString(), link.child.toString());
            });

            var render = new dagreD3.render();
            var svg = d3.select("svg."+styles.dag)
            const gg = d3.select("g."+styles.glob);

            // @ts-ignore
            const zoomed = function({transform}) {
                // @ts-ignore
                gg.attr("transform", transform);
            }
            // @ts-ignore
            svg.call(d3.zoom()
                .extent([[0, 0], [600, 600]])
                .scaleExtent([0.1, 8])
                .on("zoom", zoomed));

// Run the renderer. This is what draws the final graph.
            render(gg as any, g as any);
            return () => {
                deleters.forEach((d) => d());
                svg.on("zoom", null);
                gg.attr("transform", null);
            }

        }
    }, [data]);

    return (
        <>
            {data && (
                <div >
                    <svg className={styles.dag}>
                        <g className={styles.glob}/>
                    </svg>
                </div>
            )}
        </>
    );
};


export default DAG;
