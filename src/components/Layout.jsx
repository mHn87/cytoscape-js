import styles from "../style/App.module.scss";
import {Button, Select} from "@mui/material";

const Layout = () => {

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
                    Layout
                </span>

                {/*<p>The type of graph data display to the user</p>*/}

                <Select
                    size={'small'}
                    fullWidth
                    options={["random", "dagre", "grid"]}
                    onChange={() => {}}
                />


            </div>
        </div>
    )
}

export default Layout