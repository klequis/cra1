import * as React from 'react'
import withStyles, {WithStyles} from 'react-jss'
import cx from 'classnames'
import { Todo } from 'global-types'
import DeleteButton from 'elements/DeleteButton'
import { green } from 'logger'
interface IProps extends WithStyles<typeof styles> {
  todo: Todo
  deleteClick: (_id: string) => void
}

const TodoItem: React.FunctionComponent<IProps> = ({ todo, classes, deleteClick }) => {
  const onClick = () => {
    green('delete.onClick')
  }
  const _deleteClick = () => {
    deleteClick(todo._id)
  }
  return (
    <div className={classes.wrapper}>
      {/* {todo && todo.completed ? '-' : '+'}{' '} */}
      {todo.title}
      <div>
        <DeleteButton
          theme={'light'}
          onClick={() => _deleteClick()}
        />
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    margin:  10,
    padding: '1rem',
    backgroundColor: '#fff',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
  }
}

export default withStyles(styles)(TodoItem)
