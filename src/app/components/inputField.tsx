import '../globals.css'
import styles from '../styles/inputField.module.css'

export default function InputField({labelName, inputName = " ", inputPlaceholder = " ", inputType = "text"}: {
    labelName: string,
    inputName: string,
    inputPlaceholder: string,
    inputType: string
}) {
    return (
        <div className={styles.inputField}>
            <label>{labelName}</label>
            <input value="" type={inputType} name={inputName} placeholder={inputPlaceholder} />
        </div>
    )
}