import styles from "../style/App.module.scss";
import {Slider} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setNodeColor, setNodeSize} from "../store/slices/nodeSlice";
import {setEdgeColor, setEdgeSize, setEdgeWidth} from "../store/slices/edgeSlice";

const EdgeProperties = ({cy}) => {

    const dispatch = useDispatch()

    const {
        edgeColor,
        edgeWidth
    } = useSelector(state => state.edge)

    const {
        nodeColor,
        nodeSize
    } = useSelector(state => state.node)

    const handleChangeEdgeBackgroundColor = (e) => {
        cy.current.style(`
            node { 
                background-color: ${nodeColor};
                width : ${nodeSize};
                height: ${nodeSize};
                label: data(id);
            }
            
            edge {
                width: ${edgeWidth};
                line-color: ${e.target.value};
                target-arrow-color: ${e.target.value};
                target-arrow-shape: triangle;
                curve-style: bezier;
            }
        `);

        dispatch(setEdgeColor(e.target.value))
    }

    const handleChangeEdgeSize = (e, count) => {
        cy.current.style(`
            node { 
                background-color: ${nodeColor};
                width : ${nodeSize};
                height: ${nodeSize};
                label: data(id);
            }
            
            edge {
                width: ${count};
                line-color: ${edgeColor};
                target-arrow-color: ${edgeColor};
                target-arrow-shape: triangle;
                curve-style: bezier;
            }
        `);
        dispatch(setEdgeWidth(count))
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
                    Edge
                </span>

                <div
                    className={styles.inlineFlex}
                >
                    <span>background-color</span>
                    <input
                        type={'color'}
                        value={edgeColor}
                        onChange={(e) => handleChangeEdgeBackgroundColor(e)}
                    />

                </div>

                <div
                    className={styles.inlineFlex}
                >
                    <span>width</span>
                    <Slider
                        value={edgeWidth}
                        min={1}
                        max={10}
                        aria-label="Default"
                        onChange={(e, c) => handleChangeEdgeSize(e, c)}
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

export default EdgeProperties