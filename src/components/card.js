import React from 'react'
import style from '../../styles/card.module.scss';
import {faNum, getTimeDifferenceCaption} from '../lib/persian-number';
import { useRouter } from 'next/router';
import {getAuthorProfile} from '../lib/authors';
import {basePath} from '../lib/config';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ArticleCard = (props) => {
    const author = getAuthorProfile(props.post.user);
    const postImage = `${basePath}/images/${props.post.featured}`;
    let profileImage = `${basePath}/articles/${author.image}`;

    const route = useRouter();
    const onClick = () => {
      route.push(`/articles/${props.post.slug}`)
  }

    return (
        <Card onClick={onClick} className={style.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="article" src={profileImage} alt={author.name} className={style.avatar} >
                </Avatar>
              }
              title={author.name}
              subheader={`${faNum(getTimeDifferenceCaption(props.post.jdate))} - ${faNum(`زمان خواندن ${props.post.timeToRead} دقیقه`)}`}
            />
            <CardActionArea>
                <CardMedia
                    className={style.media}
                    image={postImage}
                    title={props.post.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.post.title}
                </Typography>
                    <Typography paragraph>{props.post.description}</Typography>
                </CardContent>
            </CardActionArea>


        </Card>
    )
}

export default ArticleCard;
