import * as React from "react"
import { connect } from "react-redux"
import { todosReadRequest, todosReadByIdRequest, todoDeleteRequest } from '../../redux/todo/actions'
import Todos from './Todos'
import { getAllTodos } from '../../redux/todo/selectors'
import { TODOS_READ_REQUEST_KEY } from 'redux/todo/constants'
import { getRequest } from 'redux/requests/selectors';
import { AppState, Todo } from 'global-types'
import { green } from 'logger'

interface IProps {
  todos: Todo[]
  todosReadRequest: () => void
  todoDeleteRequest: (_id: string) => void
}

class TodoContainer extends React.Component<IProps, []> {
  componentDidMount() {
    this.props.todosReadRequest()
    // this.props.todosReadByIdRequest('5c91aeb8e543802dd5579eef')
  }

  deleteClick = (_id: string) => {
    green('TodosContainer.deleteClick()')
    this.props.todoDeleteRequest(_id)
  }
  render() {
    const { todos }  = this.props
    return (
      <div>
        <Todos
          todos={todos}
          deleteClick={this.deleteClick}
        />
      </div>
    )
  }
}

const actions = {todosReadRequest, todosReadByIdRequest, todoDeleteRequest}

const mapStateToProps = (state: AppState) => {
  return {
    todos: getAllTodos(state),
    todosReadRequestStatus: getRequest(state, TODOS_READ_REQUEST_KEY)
  }
}

export default connect(mapStateToProps, actions)(TodoContainer)