import style from '../styles/home.module.scss';
import Typewriter from '../src/components/typewriter';
import { useRouter } from 'next/router'
import {basePath, absBasePath} from '../src/lib/config';
import { NextSeo } from 'next-seo';
const Home = () => {
    const router = useRouter()
    return (<> 
            <NextSeo
                title="لینوکسی ها"
                description="وبسایت فارسی آموزش و اخبار گنو/لینوکس"
                openGraph={{
                    type: 'website',
                    locale: 'fa_IR',
                    url: 'https://linuxihaa.ir/',
                    images: [
                      {
                        url: `${absBasePath}/images/logo.png`,
                        width: 512,
                        height: 512,
                        alt: 'Linuxiha',
                      }
                    ],
                    site_name: 'Linuxiha',
                  }}
                  twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                  }}
            />
            <section className={style.container}>
            <section className={style.banner}>
                <h2>از توزیع های <Typewriter words={["لینوکس", "گنو / لینوکس"]}/> <br/>بهتر استفاده کنیم</h2>
            </section>

            <div className={style.features}>
                <section className={style.feature}>
                    <img src={`${basePath}/images/support-articles.png`} alt="support"/>
                    <h3>حامی شو</h3>
                    <p>علاوه بر حمایت از نویسنده، محصولات خودت رو تبلیغ کن</p>
                </section>

                <section className={style.feature}>
                    <img src={`${basePath}/images/create-article.png`} alt="create article"/>
                    <h3>نویسنده شو</h3>
                    <p>مطالب آموزشی و خبری بنویس و در لینوکسی ها منتشر کن</p>
                </section>
            </div>

            <section className={style.social}>
                <ul>
                    <li> <a rel="noopener noreferrer nofollow" href="https://www.instagram.com/linuxiha" target="_blank">
                        <img src={`${basePath}/icons/instagram.png`} alt="linuxiha instagram"/></a> 
                        <div className={style.socialdesc}>
                            <h2>اینستاگرام لینوکسی ها</h2>
                            <p>دریافت آخرین اخبار و مقالات آموزشی</p>
                        </div>
                    </li>
                    <li> <a href="https://telegram.me/linuxiha" target="_blank">
                        <img src={`${basePath}/icons/telegram.png`} alt="linuxiha telegram"/></a> 
                        <div className={style.socialdesc}>
                            <h2>تلگرام لینوکسی ها</h2>
                            <p>دریافت آخرین اخبار و عضویت در گروه پرسش و پاسخ</p>
                        </div>
                    </li>
                    <li> 
                        <a rel="noopener noreferrer nofollow" href="https://twitter.com/linuxihaa" target="_blank">
                        <img src={`${basePath}/icons/twitter.png`} alt="linuxiha twitter"/></a>
                        <div className={style.socialdesc}>
                            <h2>توییتر لینوکسی ها</h2>
                            <p>در توییتر لینوکسی ها از آخرین اخبار لینوکس مطلع شوید</p>
                        </div>
                    </li>
                    <li> 
                        <a rel="noopener noreferrer nofollow" href="https://github.com/linuxihaa/" target="_blank">
                        <img src={`${basePath}/icons/github.png`} alt="linuxiha github"/></a>
                        <div className={style.socialdesc}>
                            <h2>گیت هاب لینوکسی ها</h2>
                            <p>مطالب خود را در گیت هاب با دیگران به اشتراک بگذارید</p>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
    </>)
}

export default Home;
