import dayjs from "dayjs"
import { useState } from "react"
import { useInterval } from "react-use"
const timeFormat = 'YYYY-MM-DD HH:mm:ss'
export const TimeClock = ()=>{
  const [curTime,setCurTime] = useState<string>(dayjs().format(timeFormat))
  useInterval(()=>{
    setCurTime(dayjs().format(timeFormat))
  },1000)
  return (<div>{curTime}</div>)
}
