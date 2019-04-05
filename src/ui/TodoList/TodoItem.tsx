import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import cx from 'classnames'
import { Todo } from 'global-types'

interface IProps extends WithStyles<typeof styles> {
  todo: Todo
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo, classes }) => {
  return (
    <div className={classes.wrapper}>
      {todo && todo.completed ? '-' : '+'}{' '}
      <span
        className={cx(
          'todo-item__text',
          todo && todo.completed && 'todo-item__text--completed'
        )}
      >
        {todo.title}
      </span>
    </div>
  )
}

const styles = {
  wrapper: {
    margin:  10,
    padding: '1rem',
    backgroundColor: '#fff',
    color: 'black',
  }
}

export default withStyles(styles)(TodoItem)
