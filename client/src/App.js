// @ts-nocheck
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar className='container' />
      <Switch>
        <div className='container'>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </div>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
