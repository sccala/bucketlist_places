// @ts-nocheck
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'
import memoriesLogo from '../../images/memoriesLogo.png'
import memoriesText from '../../images/memoriesText.png'
import useStyles from './styles'
import decode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'

const Navbar = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const logout = () => {
    dispatch({ type: LOGOUT })
    history.push('/')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Link to='/' className={classes.brandContainer}>
          <img src={memoriesText} alt='icon' height='45px' />
          <img className={classes.image} src={memoriesLogo} alt='icon' height='45px' />
        </Link>
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant='h6'>
                {user?.result.name}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button component={Link} to='/auth' variant='contained' color='primary'>
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
