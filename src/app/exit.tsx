'use client';

import './globals.css'
import styles from './page.module.css'
import Image from 'next/image'

function exit() {
    const xRay = document.getElementById(styles.x_ray);
    const logout = document.getElementById(styles.log_out);
    const nameId = document.getElementById(styles.name_id);
    const exitRed = document.getElementById(styles.button_exit_red);
    const exitGreen = document.getElementById(styles.button_exit_green);
    const exitIcon = document.getElementById(styles.exit_button);

    if (xRay && logout && nameId && exitRed && exitGreen && exitIcon)
    {
      exitIcon.addEventListener('mouseover', function() {
        logout.style.opacity = "1";
        nameId.style.opacity = "0";
        exitRed.style.opacity = "1";
        exitGreen.style.opacity = "0";
        xRay.style.right = "20px"
        xRay.style.color = "#E64622";
      });
    
      exitIcon.addEventListener('mouseout', function() {
          logout.style.opacity = "0";
          nameId.style.opacity = "1";
          exitRed.style.opacity = "0";
          exitGreen.style.opacity = "1";
          xRay.style.right = "70px"
          xRay.style.color = "#40BA21";
      });
    }
}

export default function Exit() {
  return (
    <div id={styles.login}>
        <div className={styles.login_text} id={styles.login_text}>
            <div id={styles.name_id}>
            Artem Burmyakov
            <br></br>
            <span className={styles.font_middle}>ID:141141</span>
            </div>
            <div className={styles.log_out} id={styles.log_out}>Log out</div>
        </div>
        <div className={styles.exit_button} id={styles.exit_button} 
        onMouseOver={exit}>
            <div id={styles.x_ray}></div>
            <Image alt="exit" width={30} height={30} id={styles.button_exit_green} src="/images/exit_button.svg" />
            <Image alt="exit" width={30} height={30} id={styles.button_exit_red} src="/images/exit_button_red.svg" />
        </div>
    </div>
  )
}
