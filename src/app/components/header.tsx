import '../globals.css'
import styles from '../styles/header.module.css'
import Exit from './exit'
import MenuTrigger from './menuTrigger'

export default function () {
    return (
        <header>
            <div id={styles.header_desktop}>
                <div>
                    <img className={styles.img_innopolis} src="/images/innopolis-university-logo-full-en_green.png" alt="" />
                </div>
                <div id={styles.enrollment_status}>
                    Application status: <div>Enrolled on partial scholarship</div>
                </div>
                <Exit />
            </div>
            <div id={styles.header_mobile}>
                <MenuTrigger />
                <div>
                    <img style={{margin: "0 auto"}} className={styles.img_innopolis} src="/images/innopolis-university-logo-full-en_green.png" alt="" />
                </div>
                <Exit />
            </div>
        </header>
    )
}
