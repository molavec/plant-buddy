import { ReactNode } from 'react'
import './index.css'

type Props = {
  children: ReactNode
}

const ChartBox = (props: Props) => {
  const { children } = props
  return (
    <div className="chart-box">
      { children }
    </div>
  )
}

export default ChartBox
