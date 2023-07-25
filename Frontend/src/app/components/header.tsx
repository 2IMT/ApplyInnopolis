import '../globals.css'
import styles from '../styles/header.module.css'
import Exit from './exit'
import MenuTrigger from './menuTrigger'
import Image from 'next/image'

export default async function Header() {
    return (
        <header>
            <div id={styles.header_desktop}>
                <div>
                    <Image className={styles.img_innopolis} src="/images/innopolis-university-logo-full-en_green.png" alt="" width={150} height={41}/>
                </div>
                <div id={styles.enrollment_status}>
                    Application status: <div>Enrolled on partial scholarship</div>
                </div>
                <Exit username={`Artem Burmyakov`} userId={`112312`}/>
            </div>
            <div id={styles.header_mobile}>
                <MenuTrigger />
                <div>
                    <Image style={{margin: "0 auto"}} className={styles.img_innopolis} src="/images/innopolis-university-logo-full-en_green.png" alt="" width={150} height={41} />
                </div>
                <Exit username={`Artem Burmyakov`} userId={`112312`}/>
            </div>
        </header>
    )
}
