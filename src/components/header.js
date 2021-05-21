import React from 'react'
import style from '../../styles/header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {basePath} from '../lib/config';

const Header = () => {
    let pathName = "";

    const router = useRouter();
    const path = router.asPath;
    
    switch(path) {
        case "/":
            pathName = "خانه";
            break;
        case "/about":
            pathName = "درباره ما"
            break;
        case "/news":
            pathName = "مطالب خبری";
            break;
        case "/learning":
            pathName = "مطالب آموزشی";
            break;

    }
    return (
        <header className={style.container}>
            <h2>{pathName}</h2>
        <nav className={style.navbar}>
            <Link className={style["menu-link"]} href="/">
                <a className={path === "/" ? style.selected : style["menu-item"]}>خانه</a>
            </Link>

            <Link className={style["menu-link"]} href="/news">
                <a className={path === "/news" ? style.selected : style["menu-item"]}>خبری</a>
            </Link>

            <Link className={style["menu-link"]} href="/learning">
                <a className={path === "/learning" ? style.selected : style["menu-item"]}>آموزشی</a>
            </Link>

            <Link className={style["menu-link"]} href="/about">
                <a className={path === "/about" ? style.selected : style["menu-item"]}>درباره ما</a>
            </Link>
        </nav>

            <figure className={style.logo}>
                <img src={`${basePath}/images/logo.png`} alt="linuxiha-logo"/>
            </figure>

        </header>
    )
}

export default Header;
