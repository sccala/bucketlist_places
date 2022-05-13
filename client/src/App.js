// @ts-nocheck
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Auth } from './components/Auth/Auth'
import { Footer } from './components/Footer/Footer'
import { PostDetails } from './components/PostDetail/PostDetails'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <BrowserRouter>
      <Navbar className='container' />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={() => <Redirect to='/posts' />} />
          <Route path='/posts' exact component={Home} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/posts/:id' component={PostDetails} />
          <Route
            path='/auth'
            exact
            component={() => (!user ? <Auth /> : <Redirect to='/posts' />)}
          />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
