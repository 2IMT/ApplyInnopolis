'use client';

import '../globals.css'
import styles from '../styles/exit.module.css'
import Image from 'next/image'
import { redirect } from 'next/navigation';

function exit() {
  redirect("/logout")
}

export default function Exit({username, userId}:{
  username: string,
  userId: string
}) {
  return (
    <div id={styles.login} onClick={exit}>
        <div className={styles.login_text} id={styles.login_text}>
            <div id={styles.name_id}>
            {username}
            <br></br>
            <span className={styles.font_middle}>ID:{userId}</span>
            </div>
            <div className={styles.log_out} id={styles.log_out}>Log out</div>
        </div>
        <div className={styles.exit_button} id={styles.exit_button}>
            <div id={styles.x_ray}></div>
            <Image alt="exit" width={30} height={30} id={styles.button_exit_green} src="/images/exit_button.svg" />
            <Image alt="exit" width={30} height={30} id={styles.button_exit_red} src="/images/exit_button_red.svg" />
        </div>
    </div>
  )
}
