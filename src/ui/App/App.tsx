import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import AddTodo from 'ui/AddTodo'
import TodoList from 'ui/TodoList'

interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const App: React.FunctionComponent<IProps> = (props) => {
  const { classes } = props
  return (
    <div className={classes.wrapper}>
      <div className={classes.add}>
        <AddTodo />
      </div>
      <div>
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
    alignItems: 'center',
    marginTop: 50,

  },
  add: {
    marginBottom: 50,
  },
}

export default withStyles(styles)(App)
