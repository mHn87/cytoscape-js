import styles from "../style/App.module.scss";
import {Button} from "@mui/material";

const NodeProperties = () => {

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



                <span>background-color: #587ad5</span>
                <span>min-zoom: 25</span>
                <span>max-zoom: 78</span>
                <span>data: 2</span>

            </div>
        </div>
    )
}

export default NodeProperties