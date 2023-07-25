'use client';

import '../globals.css'
import styles from '../styles/menu.module.css'
import headerStyles from '../styles/header.module.css'
import exitStyles from '../styles/exit.module.css'
import pageStyles from '../styles/page.module.css'
import Card from './card'
import React from 'react'
import {usePathname} from 'next/navigation';

function MenuItem({ isActive, name, link }: {
    isActive: boolean,
    name: string,
    link: string
}) {
    return (
        <li className={styles.tests}>
            <a id={styles.test} className={isActive ? styles.active : ""} href={link}>{name}</a>
        </li>
    )
}

export default function Menu() {
    const pathname = usePathname();
    return (
        <div id={styles.menu}>
            <div id={styles.user_data}>
                <div style={{ fontSize: "17px", fontWeight: "700", textAlign: "center" }}>
                    Artem Burmyakov <span className={pageStyles.font_middle}>ID:141141</span>
                </div>
                <br />
                <div style={{ textAlign: "center" }} id={headerStyles.enrollment_status}>
                    Application status: <div>Enrolled on partial scholarship</div>
                </div>
            </div>
            <section className={styles.main_box}>
                <ul className={styles.box_menu}>
                    <MenuItem isActive={pathname === "/dashboard/tests" || pathname === "/dashboard/test" ? true : false} name="TESTS" link="/"/>

                    <MenuItem isActive={pathname === "/dashboard/application" ? true : false} name="APPLICATION" link="/application"/>

                    <MenuItem isActive={pathname === "/dashboard/admission-documents" ? true : false} name="ADMISSION DOCUMENTS" link="/admission-documents"/>

                    <MenuItem isActive={pathname === "/dashboard/settings" ? true : false} name="SETTINGS" link="/settings"/>
                </ul>
            </section>
            <Card centred={true} sep={false} heading="NOTIFICATIONS:" body={
                <div className={styles.count_box} id={styles.count_box}>
                    <div className={styles.plug} id={styles.plug}>You don&apos;t have any notifications yet</div>
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
