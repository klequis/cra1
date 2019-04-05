import {
  TODO_ADD_KEY,
  TODOS_READ_KEY
} from './constants'

import { Todo } from 'global-types'

export function todosReducer(
  state: Todo[] = [],
  action: { type: string, payload: Todo[]}
): Todo[] {
  switch (action.type) {
    case TODOS_READ_KEY:
      return action.payload
    case TODO_ADD_KEY:
      return [...state, action.payload[0]]
    default:
      return state
  }
}