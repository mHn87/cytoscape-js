import {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import cytoscape from 'cytoscape'
import dagre from 'cytoscape-dagre';
import styles from './style/App.module.scss'
import PaneProperties from "./components/PaneProperties";
import Export from "./components/Export";
import Layout from "./components/Layout";
import NodeProperties from "./components/NodeProperties";
import EdgeProperties from "./components/EdgeProperties";
import Data from "./components/Data";

cytoscape.use(dagre)







const App = () => {

    const {
        backgroundColor,
        data,
        layout
    } = useSelector(state => state.pane)

    const {
        nodeColor,
        nodeSize
    } = useSelector(state => state.node)

    const {
        edgeColor,
        edgeWidth
    } = useSelector(state => state.edge)


    let cy = useRef(null)



    useEffect(() => {


        const elements = []

        for (let i = 0; i < data; i++) {
            if (i < 1) {
                elements.push(
                    {
                        data: {id: `${i}`}
                    }
                )
            } else {
                elements.push(
                    {
                        data: {id: `${i}`}
                    },
                    {
                        data: {id: `${i - 1}${i}`, source: `${i - 1}`, target: `${i}`}
                    }
                )
            }
        }




        let test = cytoscape({

            container: document.getElementById('cy'), // container to render in

            elements,

            style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                        'background-color': nodeColor,
                        'width' : nodeSize,
                        'height': nodeSize,
                        'label': 'data(id)'
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'width': edgeWidth,
                        'line-color': edgeColor,
                        'target-arrow-color': edgeColor,
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ],

            layout: {
                name: layout,
                rows: 1
            }

        })

        cy.current = test


        return () => {
            cy.current = null
        }

    }, [data, layout]);


    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.sidebar}
            >
                <Layout/>
                <Data/>
                <PaneProperties cy={cy} />
                <NodeProperties cy={cy} />
                <EdgeProperties cy={cy} />
                <Export cy={cy} />

            </div>

            <div
                id={'cy'}
                style={{
                    backgroundColor: `${backgroundColor}`
                }}
                className={styles.graphContainer}
            >
            </div>


        </div>
    );
}

export default App;
