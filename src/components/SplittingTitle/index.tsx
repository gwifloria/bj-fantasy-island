import { ReactNode, useEffect, useRef } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import './index.scss'

interface SplittingProps {
  children: string| ReactNode
}
const SplittingTitle = (props: SplittingProps) => {
  const { children } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Splitting({
      /* target: String selector, Element, Array of Elements, or NodeList */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      target: ref.current,
      /* by: String of the plugin name */
      by: "chars",
      // /* key: Optional String to prefix the CSS variables */
      key: null
    });
  }, [])

  return (
    <div className="splitting-title" ref={ref} data-splitting>{children}</div>
  )
}
export default SplittingTitle
