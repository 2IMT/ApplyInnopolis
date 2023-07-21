import '../globals.css'
import styles from '../styles/menu.module.css'
import headerStyles from '../styles/header.module.css'
import exitStyles from '../styles/exit.module.css'
import pageStyles from '../styles/page.module.css'
import Card from './card'

export default function Menu() {
    return (
        <div id={styles.menu}>
            <div id={styles.user_data}>
                <div style={{fontSize: "17px", fontWeight: "700", textAlign: "center"}}>
                    Artem Burmyakov <span className={pageStyles.font_middle}>ID:141141</span>
                </div>
                <br />
                <div style={{ textAlign: "center" }} id={headerStyles.enrollment_status}>
                    Application status: <div>Enrolled on partial scholarship</div>
                </div>
            </div>
            <section className={styles.main_box}>
                <ul className={styles.box_menu}>
                    <li className={styles.tests}>
                        <a id={styles.test} className={styles.active} href="#">TESTS</a>
                    </li>
                    <li className={styles.app}>
                        <a id={styles.app} href="/application">APPLICATION</a>
                    </li>
                    <li className={styles.admin_doc}>
                        <a id={styles.admin_doc} href="#">ADMISSION DOCUMENTS</a>
                    </li>
                    <li className={styles.settings}>
                        <a id={styles.settings} href="#">SETTINGS</a>
                    </li>
                </ul>
            </section>
            <Card centred={true} sep={false} heading="NOTIFICATIONS:" body={
                <div className={styles.count_box} id={styles.count_box}>
                    <div className={styles.plug} id={styles.plug}>You don't have any notifications yet</div>
                    <div className={styles.box_container} id={styles.box_container}></div>
                </div>
            } />
            <Card centred={true} sep={false} heading="+7 (843) 203-92-53 ext. 183" body={
                <div>
                    <div className={styles.fg} style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        <div style={{ textAlign: "left" }}>
                            FAQ
                        </div>
                        <div style={{ textAlign: "right" }}>
                            Guidelines
                        </div>
                    </div>
                    <div style={{ height: "100px" }} />
                </div>
            } />
        </div>
    )
}
