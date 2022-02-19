import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import App from './App'
import './index.css'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
