import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import TodoItem from './TodoItem'
import { Todo } from 'global-types'

interface IProps extends WithStyles<typeof styles> {
  todos: Todo[]
}

const TodoList: React.FunctionComponent<IProps> = ({ todos, classes }) => {
  return (
    <div className={classes.wrapper}>
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <TodoItem key={`todo-${todo._id}`} todo={todo} />
          })
        : "No todos, yay!"}
    </div>
  )
}

const styles = {
  wrapper: {
    minWidth: 320,
  }
}

export default withStyles(styles)(TodoList)
