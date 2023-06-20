import { ReactNode } from 'react'
import './index.css'

type Props = {
  children: ReactNode
}

const ContentHeader = (props: Props) => {
  const { children } = props
  return (
    <div className="w-full p-2 mt-4 border-b-2 border-lime-600">
      <h2 className="text-slate-800 font-semibold text-2xl"> { children } </h2>
    </div>
  )
}

export default ContentHeader
