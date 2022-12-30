import {useEffect, useRef} from "react";
import cytoscape from 'cytoscape'
import styles from './style/App.module.scss'
import PaneProperties from "./components/PaneProperties";
import Export from "./components/Export";
import Layout from "./components/Layout";
import NodeProperties from "./components/NodeProperties";
import EdgeProperties from "./components/EdgeProperties";
import Data from "./components/Data";
import {useSelector} from "react-redux";

const App = () => {

    const {
        backgroundColor,
        data
    } = useSelector(state => state.pane)

    const {
        nodeColor,
        nodeSize
    } = useSelector(state => state.node)


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
                        'background-color': `${nodeColor}`,
                        'width' : {nodeSize},
                        'height': {nodeSize},
                        'label': 'data(id)'
                    }
                },

                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ],

            layout: {
                name: 'random',
                rows: 1
            }

        })

        cy.current = test


        return () => {
            cy.current = null
        }

    }, [data]);


    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.sidebar}
            >
                <Layout/>
                <Data/>
                <PaneProperties cy={cy}/>
                <NodeProperties cy={cy}/>
                <EdgeProperties/>
                <Export cy={cy}/>

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
