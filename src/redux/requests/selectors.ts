import { AppState } from 'global-types'

const noStatus = {
  status: 'none',
  error: null,
}
export const getRequest = (state: AppState, key: string) => {
  if (state.requests[key] === null) {
    return noStatus
  } else {
    return state.requests[key]
  }
}