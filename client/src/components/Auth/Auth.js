// @ts-nocheck
import { Avatar, Container, Paper } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon'
import useStyles from './styles'

export const Auth = () => {
  //   const state = null
  const classes = useStyles()
  const isSignup = false

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avator}>
          <LockOutlinedIcon />
        </Avatar>
      </Paper>
    </Container>
  )
}
