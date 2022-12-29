import styles from "../style/App.module.scss";
import {useSelector} from "react-redux";

const PaneProperties = () => {


    const {
        backgroundColor,
        minZoom,
        maxZoom,
        data
    } = useSelector(state => state.pane)

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

                <span>background-color: {backgroundColor}</span>
                <span>min-zoom: {minZoom}</span>
                <span>max-zoom: {maxZoom}</span>
                <span>data: {data}</span>

            </div>
        </div>
    )
}

export default PaneProperties