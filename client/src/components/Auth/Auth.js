// @ts-nocheck
import {useState} from 'react'
import { Avatar, Container, Paper, Button, Typography, Grid, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import useStyles from './styles'

export const Auth = () => {
  const classes = useStyles()
  const isSignup = false
  const [showPassword, setShowPassword]=useState()
  const handleSubmit = () => {}
  const handleChange = () => {}

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
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
