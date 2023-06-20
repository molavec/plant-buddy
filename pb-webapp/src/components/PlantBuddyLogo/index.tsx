import './index.css'

import logo from './logo.png'

type Props = {
  width?: number,
  height?: number,
}

const CardContainer = (props: Props) => {
  return (
    <img 
      src={logo} 
      alt=""  
      height={props.height}
      width={props.width}
    />
  )
}

export default CardContainer
