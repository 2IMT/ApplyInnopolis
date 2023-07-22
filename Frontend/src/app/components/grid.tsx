import styles from '../styles/grid.module.css'

export default function Grid({ columns, children }: {
    columns: number
    children: React.ReactNode
}) {
    return (
        <div className={styles.grid} style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
            {children}
        </div>
    )
}
