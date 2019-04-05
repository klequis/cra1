import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import AddTodo from 'ui/AddTodo'
import TodoList from 'ui/TodoList'

// import { green } from 'logger'

interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const App: React.FunctionComponent<IProps> = (props) => {

  // green('props', classes.wrapper)
  const { classes } = props
  return (
    <div className={classes.wrapper}>
      <div className={classes.add}>
        <AddTodo />
      </div>
      <div className={classes.todo}>
        <TodoList />
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    // maxWidth: 500,
    alignItems: 'center',
    marginTop: 50,

  },
  add: {
    marginBottom: 50,
  },
  todo: {
    backgroundColor: 'red'
  }
}

export default withStyles(styles)(App)
