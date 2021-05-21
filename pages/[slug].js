import Paper from '@material-ui/core/Paper';
import React from 'react'
import articleStyle from '../styles/article.module.scss';
import { NextSeo } from 'next-seo';
import {absBasePath} from '../src/lib/config'
import PrintMarkdown from '../src/components/printMarkDown';
import {getStaticPageContentBySlug} from '../src/lib/markdown-utils';
import moment from 'jalali-moment';

export default function AboutUs({page}) {
  const {
    slug,
    layout,
    jdate,
    user,
    title,
    categories,
    tags,
    featured,
    keywords,
    description,
    timeToRead,
    content
    } = page;

    return (
        <>
            <NextSeo
                title="لینوکسی ها - درباره ما"
                description="درباره لینوکسی ها"
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
            <Paper className={articleStyle.article}>
                <h1>{title}</h1>
            <section className={articleStyle.content}>
                <PrintMarkdown markdown={content} />
            </section>
            </Paper>
        </>
    )
}

export async function getStaticProps({ params }) {
 
    // Pass in the fields that we want to get
    const page = getStaticPageContentBySlug('about', [
      'slug', 'layout', 'jdate', 'user', 'title', 'categories', 'tags', 'featured' , 'keywords',  'description', 'timeToRead', 'content'
    ]);

    const pageWithDate = {...page, jdate: moment(page.jdate, 'jYYYY-jMM-jDD').toLocaleString()};
  
    return {
      props: {
        page: {
          ...pageWithDate,
        },
      },
    };
  }

  export async function getStaticPaths() {
    const page = getStaticPageContentBySlug('about', [
      'slug', 'layout', 'jdate', 'user', 'title', 'categories', 'tags', 'featured' , 'keywords',  'description', 'timeToRead', 'content'
    ]);
    const paths = [{params: {slug: 'about'}}]
    return {
      paths,
      fallback: false,
    };
  }
