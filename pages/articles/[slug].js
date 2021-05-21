import React from 'react'
import {useRouter} from 'next/router';
import {getDynamicPageContentBySlug, getAllDynamicPages} from '../../src/lib/markdown-utils';
import PrintMarkdown from '../../src/components/printMarkDown';
import style from '../../styles/article.module.scss';
import Paper from '@material-ui/core/Paper';
import {basePath, absBasePath} from '../../src/lib/config';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import {faNum, getTimeDifferenceCaption} from '../../src/lib/persian-number';
import {getAuthorProfile} from '../../src/lib/authors';
import moment from 'jalali-moment'
import ArticleProgress from '../../src/components/ArticleProgress';
import { NextSeo, ArticleJsonLd, BreadcrumbJsonLd } from 'next-seo';

export default function Article({page}) {
    const router = useRouter();
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

      const author = getAuthorProfile(page.user);
      const postImage = `${basePath}/images/${featured}`;
      const profileImage = author.image;

      let subject = '';
      let subjectPath = '';
      if(categories.includes("آموزشی")) {
        subject = 'آموزشی';
        subjectPath = `${basePath}/learning`
      }
      if(categories.includes("خبری"))
      {
        subject = 'خبری';
        subjectPath = `${basePath}/news`
      }

      return (
        <>
          <NextSeo
              title={title}
              description={description}
              openGraph={{
                url: router.pathname,
                title: title,
                description: description,
                images: [
                  {
                    url: `${absBasePath}/images/${featured}`,
                    width: 800,
                    height: 600,
                    alt: title,
                  }
                ],
                site_name: 'Linuxiha',
              }}
          />
          <ArticleJsonLd
             url={`${absBasePath}${router.asPath}`}
             title={title}
             images={[
              `${absBasePath}/images/${featured}`
             ]}
             datePublished={jdate}
             dateModified={jdate}
             authorName={author.name}
             publisherName='Linuxiha'
             description={description}
             publisherLogo= {`${absBasePath}/images/logo.png`}
          />
          <BreadcrumbJsonLd
            itemListElements={[
              {
                position: 1,
                name: 'لینوکسی ها',
                item: absBasePath,
              },
              {
                position: 2,
                name: subject,
                item: subjectPath,
              },
              {
                position: 3,
                name: title,
                item: `${absBasePath}${router.asPath}`,
              }
            ]}
          />
          <Paper className={style.article}>
            <img src={postImage} alt={title}/>
            <h1>{title}</h1>
              <CardHeader
                avatar={
                  <Avatar aria-label="article" src={profileImage} alt={author.name} className={style.avatar} >
                  </Avatar>
                }
                title={author.name}
                subheader={`${faNum(getTimeDifferenceCaption(page.jdate))} - ${faNum(`زمان خواندن ${page.timeToRead} دقیقه`)}`}
              />
           <section className={style.content}>
              <PrintMarkdown markdown={content} />
           </section>
           <ArticleProgress/>
          </Paper>
        </>
      );
}


export async function getStaticProps({ params }) {
    const { slug } = params;
  
    // Pass in the fields that we want to get
    const page = getDynamicPageContentBySlug(slug, [
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
    const posts = getAllDynamicPages(['slug']);
    const paths = posts.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    }));
    return {
      paths,
      fallback: false,
    };
  }