import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';
import {useEffect, useState} from "react";
import styles from './DAG.module.css'
import {IGraph} from "../../models/Branch";
import SmallNode from "../NodeComponent/SmallNode";
import {createPortal} from "react-dom";


const createDOMNode = (id:any) =>{
    const container = document.createElement('div')
    container.id = 'node_'+ id
    return container
}



const DAG = ({data}:{data:IGraph}) => {

    const [state, setState] = useState([])

    useEffect(() => {

        if (data) {

            const g = new dagreD3.graphlib.Graph().setGraph({}).setDefaultEdgeLabel(function() { return {}; });
            const containers:Array<HTMLElement> = []
            data.nodes.forEach((node, index) => {
                const container = createDOMNode(node.id)
                containers.push(container)
                g.setNode(node.id.toString(), { label: container, shape: 'circle'});
            });
            // @ts-ignore
            setState(containers)
            data.links.forEach((link) => {
                g.setEdge(link.parent.toString(), link.child.toString(), {
                    arrowhead: 'vee', curve: d3.curveMonotoneY
                });
            });

            const svg = d3.select("svg."+styles.dag)
            const gg = d3.select("g."+styles.glob);

// Run the renderer. This is what draws the final graph.

            var render = new dagreD3.render();
            render(gg as any, g as any);




            // @ts-ignore
            const zoomed = function({transform}) {
                // @ts-ignore
                gg.attr("transform", transform);
            }
            const zoom = d3.zoom()
                .on("zoom", zoomed)



            // @ts-ignore
            svg.call(zoom.transform, d3.zoomIdentity);
            // @ts-ignore
            const rect = gg.node().getBoundingClientRect()
            // @ts-ignore
            svg.transition()// @ts-ignore
                .call(zoom.translateTo, rect.x+(rect.width/2), rect.y+400)
            // @ts-ignore
            svg.call(zoom).on("dblclick.zoom", null);



            return () => {
                svg.on(".zoom", null);
                console.log(gg.selectChildren())
                gg.selectChildren().remove()
            }

        }
    }, [data]);



    return <>
        { state.length===data.nodes.length && state.map((cont,index)=>
            createPortal(<SmallNode node={data.nodes[index]} key={data.nodes[index].id}/>, cont))

        }
            <svg className={styles.dag}>
                <g className={styles.glob}/>
            </svg>
        </>

};


export default DAG;
