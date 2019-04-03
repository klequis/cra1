import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import AddTodo from 'ui/AddTodo'
import TodoList from 'ui/TodoList'
// import { green } from 'logger'

interface IProps extends WithStyles<typeof styles> {
  classes: any
  children: React.ReactNode
}

const App:  React.FunctionComponent<IProps> = (props) => {

  // green('props', classes.wrapper)
  const { classes } = props
  return (
    <div className={classes.wrapper}>
      <AddTodo />
      <TodoList />
    </div>
  )
}

const styles = {
  wrapper: {
    // backgroundColor: 'red',
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    // justifyContent: 'space-between',
  },
}

export default withStyles(styles)(App)
