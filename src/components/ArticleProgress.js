import React, {useState, useEffect} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import style from '../../styles/progress.module.scss';


export default function ArticleProgress() {
    const [progress, setProgress] = useState(0);

    function updateProgress() {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setProgress(scrollPercentRounded > 100 ? 100 : scrollPercentRounded);
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
        <div className={style.root}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}
