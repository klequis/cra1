import { fetchJson } from './api-helpers'

// eslint-disable-next-line
import { pink } from 'logger'

// Errors are handled by fetchJson()
export default {
  todos: {
    async read() {
      pink('api.todos.read()')
      const data = await fetchJson(
        '/api/todo',
        {
          method: 'GET',
        }
      )
      return data.data
    },
    async readById(id) {
      pink('api.readById: id', id)
      const data = await fetchJson(
        `/api/todo/${id}`,
        {
          method: 'GET',
        }
      )
      return data.data
    },
    async create(todo) {
      const data = await fetchJson(
        '/api/todo',
        {
          method: 'POST',
          body: JSON.stringify(todo)
        }
      )
      return data.data
    },
    async delete(_id) {
      pink('api.todos.delete: _id', _id)
      const data = await fetchJson(
        `/api/todo/${_id}`,
        {
          method: 'DELETE'
        }
      )
      return data.data
    }
  }
}