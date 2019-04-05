import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'


interface IProps {
  children: any
  alt: string
}

const Icon: React.FunctionComponent<IProps> = ({children, alt}) => {
  return <img src={children} alt={alt}/>
}

export default Icon


