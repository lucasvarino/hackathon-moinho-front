import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import {FaFacebook} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {SiYoutubemusic} from 'react-icons/si'


export default function Footer () {
    return (

        <>
            <footer className={styles.footerMain}>
                <div>
                    <h3>Desenvolvido pelo grupo 12</h3>
                </div>

                <div className={styles.iconsFooter}>
                    <ul className={styles.listIconsFooter}>
                        <li className={styles.icFooter}><a href=''><FaFacebook className={styles.linkIcons}/></a></li>
                        <li className={styles.icFooter}><a href=''><BsInstagram className={styles.linkIcons}/></a></li>
                        <li className={styles.icFooter}><a href=''><SiYoutubemusic className={styles.linkIcons}/></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )

}