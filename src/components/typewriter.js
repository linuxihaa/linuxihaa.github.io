import React from 'react'
import { useState, useEffect} from 'react';
import style from '../../styles/typewriter.module.scss';

export default function Typewriter(props) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true); 
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
      }, [blink]);
    useEffect(() => {
         if (index === (props.words.length - 1) && subIndex === props.words[index].length + 1) {
          return;
        };

        if (
          subIndex === props.words[index].length + 1 &&
          !reverse
          ){
            setReverse(true);
            return;
           }
         
         if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
           }

        const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 300);

        return () => clearTimeout(timeout);
        }, [subIndex, index, reverse, setSubIndex, setIndex, setReverse]);
    return (
        <span >
          {`${props.words[index].substring(0, subIndex)}`} <span className={blink ? style.cursor : ""}>|</span>  
        </span>
    )
}
