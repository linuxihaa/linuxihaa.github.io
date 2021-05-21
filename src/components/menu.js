import React, {useEffect} from 'react';
import style from '../../styles/menu.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router'
import {basePath} from '../lib/config'

let prevScrollpos = 0;
const Menu = () => {
    const router = useRouter();
    const path = router.asPath;


    useEffect(() => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
 
            if (prevScrollpos >= currentScrollPos) {
              document.getElementById("navbar").style.bottom = "0";
            } else {
              document.getElementById("navbar").style.bottom = "-60px";
            }
            prevScrollpos = currentScrollPos;
          }
    }, [])

    return (
        <nav id="navbar" className={style["menu-container"]}>
            <Link className={style["menu-link"]} href="/">
                <a className={path === "/" ? style.selected : style["menu-item"]}> 
                <img src={`${basePath}/icons/home.png`} alt="home"/> <span>خانه</span> <aside></aside>
                </a>
            </Link>

            <Link className={style["menu-link"]} href="/news">
                <a className={path === "/news" ? style.selected : style["menu-item"]}>
                <img src={`${basePath}/icons/news.png`} alt="news"/> <span>خبری</span> <aside></aside>
                </a>
            </Link>

            <Link className={style["menu-link"]} href="/learning">
                <a className={path === "/learning" ? style.selected : style["menu-item"]}>
                <img src={`${basePath}/icons/article.png`} alt="article"/> <span>آموزشی</span> <aside></aside>
                    </a>
            </Link>

            <Link className={style["menu-link"]} href="/about">
                <a className={path === "/about" ? style.selected : style["menu-item"]}>
                    <img src={`${basePath}/icons/info.png`} alt="info"/> <span>درباره ما</span> <aside></aside>
                </a>
            </Link>
        </nav>
    )
}

export default Menu;
