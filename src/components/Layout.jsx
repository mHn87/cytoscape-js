import {useState} from "react";
import styles from "../style/App.module.scss";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Layout = () => {


    const [layout, setLayout] = useState('random');

    const handleChange = (e) => {
        setLayout(e.target.value);
    };

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
                    value={layout}
                    onChange={handleChange}
                >
                    <MenuItem value={'random'}>random</MenuItem>
                    <MenuItem value={'dagre'}>dagre</MenuItem>
                    <MenuItem value={'grid'}>grid</MenuItem>
                </Select>


            </div>
        </div>
    )
}

export default Layout