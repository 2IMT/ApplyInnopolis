import '../globals.css'
import styles from '../styles/card.module.css'
import Props from 'next/script'

export default function Card({ heading, body, sep = true, centred = false}: {
    heading: string,
    body: React.ReactNode,
    sep?: boolean,
    centred?: boolean
}) {
    return (
        <div className={styles.card} style={{ textAlign: centred ? "center" : "left" }}>
            <div className={styles.heading}>{heading}</div>
            {sep && <div className={styles.sep}></div>}
            <div className={styles.body}>{body}</div>
        </div>
    )
}
