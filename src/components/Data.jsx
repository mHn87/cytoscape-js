import {useState} from "react";
import styles from "../style/App.module.scss";
import {Slider} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../store/slices/paneSlice";

const Data = () => {


    const {
        data
    } = useSelector(state => state.pane)

    const dispatch = useDispatch()


    const handleChangeData = (e, count) => {
        dispatch(setData(count))
    };

    return (
        <div
            className={styles.editorContainer}
        >
            <div
                className={styles.editorItem}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <span
                        className={styles.editorItemTitle}
                    >
                    Data
                </span>

                    <span>{data}</span>
                </div>

                <Slider
                    value={data}
                    min={2}
                    max={5000}
                    aria-label="Default"
                    onChange={(e, c) => handleChangeData(e, c)}
                    valueLabelDisplay="auto"
                />

            </div>
        </div>
    )
}

export default Data