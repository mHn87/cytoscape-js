import styles from "../style/App.module.scss";
import {Button} from "@mui/material";

const Export = () => {

    return (
        <div
            className={styles.editorContainer}
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
                    <Button variant={'outlined'} size={'small'} color={'inherit'}>png</Button>
                    <Button variant={'outlined'} size={'small'} color={'inherit'}>jpg</Button>
                    <Button variant={'outlined'} size={'small'} color={'inherit'}>json</Button>
                </div>

            </div>
        </div>
    )
}

export default Export