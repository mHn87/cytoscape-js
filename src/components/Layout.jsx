import {useState} from "react";
import styles from "../style/App.module.scss";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {changeLayout, setData} from "../store/slices/paneSlice";

const Layout = () => {

    const {
        layout
    } = useSelector(state => state.pane)

    const dispatch = useDispatch()


    const handleChangeLayout = (e) => {
        dispatch(changeLayout(e.target.value))
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


                <Select
                    size={'small'}
                    fullWidth
                    value={layout}
                    onChange={handleChangeLayout}
                >
                    <MenuItem value={'random'}>random</MenuItem>
                    <MenuItem value={'dagre'}>dagre</MenuItem>
                    <MenuItem value={'grid'}>grid</MenuItem>
                    <MenuItem value={'concentric'}>concentric</MenuItem>
                </Select>


            </div>
        </div>
    )
}

export default Layout