// @ts-nocheck
import { Avatar, Button, Container, Typography } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <Container maxWidth='xl'>
        <div className={classes.appBar} position='static' color='inherit'>
          <h1 style={{ color: 'lightgrey' }} className={classes.heading}>
            Bucket List Places
          </h1>
          <div className={classes.toolbar}>
            {user?.result ? (
              <div className={classes.profile}>
                <Avatar
                  className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
                <Typography
                  style={{ color: 'lightgrey', margin: '0 5%' }}
                  className={classes.userName}
                  variant='p'
                >
                  {user?.result.name}
                </Typography>
                <Button
                  variant='contained'
                  className={classes.logout}
                  style={{ backgroundColor: '#740606' }}
                  color='secondary'
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                style={{ backgroundColor: '#740606', fontWeight: '100' }}
                component={Link}
                to='/auth'
                variant='contained'
                color='primary'
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </Container>
      <hr
        style={{ width: '100%', border: '0.5px solid', marginBottom: '40px', color: 'lightgrey' }}
      />
    </>
  )
}

export default Navbar
