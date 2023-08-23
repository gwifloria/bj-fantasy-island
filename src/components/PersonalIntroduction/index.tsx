import { isNumber } from 'lodash'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import './index.scss'

export const PersonalIntroduction = () => {
  const domRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>()

  const rnd = (m: number, n: number) => {
    m = isNumber(m) ? m : parseInt(m);
    n = isNumber(n) ? n : parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }

  useLayoutEffect(() => {
    if (domRef.current) {
      setWidth(domRef.current.offsetWidth);
    }
  }, [domRef]);

  const renderChildren = useMemo(() => {
    if (!width) { return <></> }
    const count = Math.floor(width / 50 * 8)
    const numArray = new Array(count).fill(0)
    return numArray.map((_i, index) => <span key={index} className={`particle c${rnd(1, 2)}`} style={{ top: `${rnd(10, 50)} %`, left: `${rnd(0, 100)}%`, width: `${rnd(7, 9)}px`, height: `${rnd(3, 4)}px`, animationDelay: `${(rnd(0, 30) / 10)}s` }}  ></span>)
  }, [width])


  return (<div className="personal-introduction__container">
    <div className="container">
      <span ref={domRef} className="text confetti">WELCOME TO BJ&lsquo;FANTASY ISLAND
        {renderChildren}
      </span>
    </div>
    <div className='brief-intro'>
      <span>Hi, I&lsquo;m HUIJUE GONG</span>
      <span>I am a Front End Developer</span>
    </div>
  </div>)
}
