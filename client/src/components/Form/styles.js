import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  signinrecommend: {
    padding: theme.spacing(2),
    borderRadius: '10px',
    color:'lightgrey',
    fontFamily: 'Roboto',
    letterSpacing: '2',
    marginTop: '50%'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}))
