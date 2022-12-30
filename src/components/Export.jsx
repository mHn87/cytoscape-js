import styles from "../style/App.module.scss";
import {Button} from "@mui/material";

const Export = ({cy}) => {


    const exportPng = () => {
        let png64 = cy.current.png();
        const a = document.createElement('a')
        a.href = png64
        a.download = "png"
        a.click();
        a.remove();

    }

    const exportJpg = () => {
        let jpg64 = cy.current.jpg();
        const a = document.createElement('a')
        a.href = jpg64
        a.download = "jpg"
        a.click();
        a.remove();

    }

    const exportJson = () => {
        const blob = new Blob([JSON.stringify(cy.current.json())], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'json';
        a.click();
        a.remove();
    }


    return (
        <div
            className={styles.editorContainer}
            style={{
                marginBottom: "16px"
            }}
        >
            <div
                className={styles.editorItem}
            >


                {/*<p>You can get the desired output from your data and share it with friends</p>*/}

                <div
                    className={styles.editorItemButtonGroup}
                >
                     <span
                         className={styles.editorItemTitle}
                     >
                        Export
                     </span>
                    <Button variant={'outlined'} size={'small'} onClick={exportPng}>png</Button>
                    <Button variant={'outlined'} size={'small'} onClick={exportJpg}>jpg</Button>
                    <Button variant={'outlined'} size={'small'} onClick={exportJson}>json</Button>
                </div>

            </div>
        </div>
    )
}

export default Export