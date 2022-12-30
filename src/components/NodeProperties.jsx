import styles from "../style/App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setBackgroundColor, setMinZoom} from "../store/slices/paneSlice";
import {Slider} from "@mui/material";
import {setNodeColor, setNodeSize} from "../store/slices/nodeSlice";

const NodeProperties = ({cy}) => {

    const dispatch = useDispatch()

    const {
        nodeColor,
        nodeSize
    } = useSelector(state => state.node)

    const {
        edgeColor,
        edgeWidth
    } = useSelector(state => state.edge)


    const handleChangeNodeBackgroundColor = (e) => {
        cy.current.style( `  
            node { 
                background-color: ${e.target.value};
                width : ${nodeSize};
                height: ${nodeSize};
                label: data(id);
            }
            
            edge {
                width: ${edgeWidth};
                line-color: ${edgeColor};
                target-arrow-color: ${edgeColor};
                target-arrow-shape: triangle;
                curve-style: bezier;
            }
        `);

        dispatch(setNodeColor(e.target.value))
    }

    const handleChangeNodeSize = (e, count) => {
        cy.current.style( `
            node { 
                background-color: ${nodeColor};
                width : ${count};
                height: ${count};
                label: data(id);
            }
            
            edge {
                width: ${edgeWidth};
                line-color: ${edgeColor};
                target-arrow-color: ${edgeColor};
                target-arrow-shape: triangle;
                curve-style: bezier;
            }
        `);
        dispatch(setNodeSize(count))
    }

    return (
        <div
            className={styles.editorContainer}
        >
            <div
                className={styles.editorItem}
            >
                <span
                    className={styles.editorItemTitle}
                >
                    Node
                </span>

                <div
                    className={styles.inlineFlex}
                >
                    <span>background-color</span>
                    <input
                        type={'color'}
                        value={nodeColor}
                        onChange={(e) => handleChangeNodeBackgroundColor(e)}
                    />

                </div>

                <div
                    className={styles.inlineFlex}
                >
                    <span>size</span>
                    <Slider
                        value={nodeSize}
                        min={10}
                        max={50}
                        aria-label="Default"
                        onChange={(e, c) => handleChangeNodeSize(e, c)}
                        valueLabelDisplay="auto"
                        sx={{
                            width: "200px"
                        }}
                    />
                </div>


            </div>
        </div>
    )
}

export default NodeProperties