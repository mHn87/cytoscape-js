import styles from "../style/App.module.scss";

const EdgeProperties = () => {
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

                <span>background-color: #587ad5</span>
                <span>min-zoom: 25</span>
                <span>max-zoom: 78</span>
                <span>data: 2</span>

            </div>
        </div>
    )
}

export default EdgeProperties