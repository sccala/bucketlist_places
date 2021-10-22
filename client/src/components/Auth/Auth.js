// @ts-nocheck
import { useState } from 'react'
import { Avatar, Container, Paper, Button, Typography, Grid } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Icon from './icon'
import Input from './Input'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { AUTH } from '../../constants/actionTypes'

export const Auth = () => {
  const [showPassword, setShowPassword] = useState()
  const [isSignup, setIsSignup] = useState(false)
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleSubmit = () => {}
  const handleChange = () => {}
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword)

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup)
    handleShowPassword(false)
  }

  const googleSuccess = async res => {
    const result = res?.profileObj
    const token = res?.tokenId
    
    try {
      dispatch({ type: AUTH, data: { result, token } })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = error => {
    console.log(error)
    console.log('Google Sign In was unsuccessful. Try Again Later')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avator}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                labe='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId='755766440322-pm0e0d73h7l20h811hbq1028u4ld5knu.apps.googleusercontent.com'
            render={renderProps => (
              <Button
                className={classes.googleButton}
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
