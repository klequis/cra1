import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux'

import Wrapper from './Wrapper'

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <Wrapper />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./ui/App', renderApp)
}

renderApp()

