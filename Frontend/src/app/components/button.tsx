import '../globals.css'
import styles from '../styles/button.module.css'

export default function Button({ text, inputType, link, clickCallback}: {
    text: string,
    inputType: string
    link?: string
    clickCallback?: () => void
}) {
    return (
        <a href={link == null ? "#" : link}>
            <input type={inputType} value={text} className={styles.button} style={{ width: "fit-content" }} onClick={clickCallback} />
        </a>

    )
}