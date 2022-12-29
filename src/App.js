import {useEffect} from "react";
import cytoscape from 'cytoscape'
import styles from './style/App.module.scss'
import PaneProperties from "./components/PaneProperties";
import Export from "./components/Export";
import Layout from "./components/Layout";
import NodeProperties from "./components/NodeProperties";
import EdgeProperties from "./components/EdgeProperties";

const App = () => {

    useEffect(() => {
        cytoscape({

            container: document.getElementById('cy'), // container to render in

            elements: [ // list of graph elements to start with
                { // node a
                    data: {id: 'a'}
                },
                { // node b
                    data: {id: 'b'}
                },
                { // edge ab
                    data: {id: 'ab', source: 'a', target: 'b'}
                }
            ],

            style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
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
    }, []);


    return (
        <div
            className={styles.container}
        >
            <div
                className={styles.sidebar}
            >
                <Layout />
                <PaneProperties />
                <NodeProperties />
                <EdgeProperties />
                <Export />

            </div>

            <div
                id={'cy'}
                className={styles.graphContainer}
            >

            </div>



        </div>
    );
}

export default App;
