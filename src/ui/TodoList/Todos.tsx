import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import TodoItem from './TodoItem'
import { Todo } from 'global-types'

interface IProps extends WithStyles<typeof styles> {
  todos: Todo[]
  deleteClick: (_id: string) => void
}

const TodoList: React.FunctionComponent<IProps> = ({ todos, classes, deleteClick }) => {
  return (
    <div className={classes.wrapper}>
      {todos && todos.length
        ? todos.map((todo, index) => {
            return (
              <TodoItem
                key={`todo-${todo._id}`} todo={todo}
                deleteClick={deleteClick}
              />
            )
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
