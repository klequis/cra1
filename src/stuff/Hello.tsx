import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'

const styles = {
  h1Color: {
    color: 'green'
  }
}

interface IProps extends WithStyles<typeof styles> {

}

const Hello: React.FunctionComponent<IProps> = ({ classes }) => {
  return <h1 className={classes.h1Color}>HI</h1>
}

export default withStyles(styles)(Hello)