import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Image from 'next/image'
import Exit from './exit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apply Innopolis: Tests',
  description: '',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <div id={styles.logo}>
            <Image alt="logo" width={150} height={40} className={styles.img_innopolis} src="/images/innopolis-university-logo-full-en_green.png" />
          </div>
          <div id={styles.enrollment_status}>
            Application status: <div>Enrolled on partial scholarship</div>
          </div>
          <Exit/>
        </header>
        <div className={styles.main}>
          <div id={styles.menu}>
            <section className={styles.main_box}>
              <ul className={styles.box_menu}>
                <li className={styles.tests}>
                  <a id={styles.test} className={styles.active} href="#">TESTS</a>
                </li>
                <li className={styles.app}>
                  <a id={styles.app} href="#">APPLICATION</a>
                </li>
                <li className={styles.admin_doc}>
                  <a id={styles.admin_doc} href="#">ADMISSION DOCUMENTS</a>
                </li>
                <li className={styles.settings}>
                  <a id={styles.settings} href="#">SETTINGS</a>
                </li>
              </ul>
            </section>
            <div className={styles.card} style={{ textAlign: "center" }}>
              <div className={styles.heading}>
                NOTIFICATIONS:
              </div>
              <div className={styles.count_box} id={styles.count_box}>
                <div className={styles.plug} id={styles.plug}>You don't have any notifications yet</div>
                <div className={styles.box_container} id={styles.box_container}></div>
              </div>
            </div>
            <div className={styles.card} style={{ textAlign: "center" }}>
              <div className={styles.heading}>
                +7 (843) 203-92-53 ext. 183
                <div className={styles.fg} style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ textAlign: "left" }}>
                    FAQ
                  </div>
                  <div style={{ textAlign: "right" }}>
                    Guidelines
                  </div>
                </div>
              </div>
              <div style={{ height: "100px" }}>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
