import styles from "../style/App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {Button, Slider} from "@mui/material";
import {useEffect, useState} from "react";
import {setBackgroundColor, setMaxZoom, setMinZoom} from "../store/slices/paneSlice";

const PaneProperties = ({cy}) => {


    const {
        backgroundColor,
        minZoom,
        maxZoom,
        data
    } = useSelector(state => state.pane)


    const dispatch = useDispatch()




    const handleChangeBackgroundColor = (e) => {
        dispatch(setBackgroundColor(e.target.value))
    }

    const handleChangeMinZoom = (e,count) => {
        cy.current.minZoom(count)
        dispatch(setMinZoom(count))
    }

    const handleChangeMaxZoom = (e,count) => {
        cy.current.maxZoom(count)
        dispatch(setMaxZoom(count))
    }

    const handleFit = () => {
        cy.current.fit()
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
                    Pane
                </span>

                <div
                    className={styles.inlineFlex}
                >
                    <span>background-color</span>
                    <input
                        type={'color'}
                        value={backgroundColor}
                        onChange={(e) => handleChangeBackgroundColor(e)}
                    />

                </div>


                <div
                    className={styles.inlineFlex}
                >
                    <span style={{}}>min-zoom</span>
                    <Slider
                        value={minZoom}
                        min={-100}
                        max={0}
                        aria-label="Default"
                        onChange={(e, c) => handleChangeMinZoom(e,c)}
                        valueLabelDisplay="auto"
                        sx={{
                            width:"200px"
                        }}
                    />
                </div>

                <div
                    className={styles.inlineFlex}
                >
                    <span>max-zoom</span>
                    <Slider
                        value={maxZoom}
                        min={0}
                        max={25}
                        aria-label="Default"
                        onChange={(e, c) => handleChangeMaxZoom(e,c)}
                        valueLabelDisplay="auto"
                        sx={{
                            width:"200px"
                        }}
                    />
                </div>

                <Button
                    onClick={handleFit}
                    size={'small'}
                    fullWidth
                    variant={'contained'}
                >
                    Fit
                </Button>

            </div>
        </div>
    )
}

export default PaneProperties