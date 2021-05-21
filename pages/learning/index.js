import React, {useState, useEffect} from 'react'
import style from '../../styles/articles.module.scss';
import { getAllDynamicPages} from '../../src/lib/markdown-utils';
import ArticleCard from '../../src/components/card';
import moment from 'jalali-moment';
import { NextSeo } from 'next-seo';
import {absBasePath} from '../../src/lib/config'

const Learning = (props) => {
    const [progress, setProgress] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if(progress > 80) {
            setPage((page + 1));
        }
    }, [progress, setProgress])
            
            
    function updateProgress() {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setProgress(scrollPercentRounded);
        }
    
        useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", updateProgress);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", updateProgress);
        };
        });

    return (
        <>
            <NextSeo
                title="لینوکسی ها - آموزشی"
                description="مطالب آموزشی گنو/لینوکس"
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
            <div className={style.container}>
            
                {props.posts
                    .filter(post => post.categories.includes("آموزشی"))
                    .sort(function(a,b){
                            return new Date(b.jdate) - new Date(a.jdate);
                        })
                    .slice(0, (5 * page))
                    .map(post => {return {...post, jdate: moment(post.jdate, 'jYYYY-jMM-jDD')}})
                    .map(post => <ArticleCard key={post.title} post={post}/>)}
            </div>
        </>
    )
}

export default Learning;

export async function getStaticProps({ params }) {
    const posts = getAllDynamicPages(['slug', 'layout', 'jdate', 'user', 'title', 'categories', 'tags', 'featured' , 'keywords', 'description', 'timeToRead']);

    return { props: {posts: posts} }
}
