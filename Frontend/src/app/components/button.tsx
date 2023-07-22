import '../globals.css'
import styles from '../styles/button.module.css'

export default function Button({text, inputType}: {
    text: string,
    inputType: string
}) {
    return (
        <input type={inputType} value={text} className={styles.button} style={{ width: "fit-content" }} />
    )
}