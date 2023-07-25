import '../globals.css'
import styles from '../styles/textArea.module.css'

export default function TextArea({labelName, inputName, example}: {
    labelName: string;
    inputName: string;
    example?: string;
}) {
    return (
    <div>
        <label>{labelName}</label>
        <textarea className={styles.textArea} name={inputName} placeholder={example}></textarea>
    </div>
    )
}