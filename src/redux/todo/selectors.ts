import { Todo } from 'global-types'

type TodoState = {
  todos: Todo[]
}

export function getAllTodos(state: TodoState): Todo[] {
  return state.todos
}