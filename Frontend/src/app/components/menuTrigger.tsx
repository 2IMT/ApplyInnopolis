'use client';

import '../globals.css'
import styles from '../styles/page.module.css'
import menuStyles from '../styles/menu.module.css'
import Image from 'next/image'

function openMenu() {
    const openIcon = document.getElementById("open_menu_icon");
    const closeIcon = document.getElementById("close_menu_icon");
    const menu = document.getElementById(menuStyles.menu)

    if (openIcon && closeIcon && menu) {
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
        menu.style.left = "0";
    }
}

function closeMenu() {
    const openIcon = document.getElementById("open_menu_icon");
    const closeIcon = document.getElementById("close_menu_icon");
    const menu = document.getElementById(menuStyles.menu)

    if (openIcon && closeIcon && menu) {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
        menu.style.left = "-100vw";
    }
}

export default function MenuTrigger() {
    return (
        <div>
            <i className={`bi bi-list ${styles.icon}`} id="open_menu_icon" onClick={openMenu} style={{ fontSize: "22pt" }}></i>
            <i className={`bi bi-x-lg ${styles.icon}`} id="close_menu_icon" onClick={closeMenu} style={{ display: "none", fontSize: "22pt" }}></i>
        </div>
    )
}
