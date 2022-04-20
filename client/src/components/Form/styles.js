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
    color: 'lightgrey',
    fontFamily: 'Roboto',
    letterSpacing: '2',
    marginBlock: '0.5rem',
  },
  input: {
    color: 'lightgrey',
  },
  focused: {
    border: 'lightgrey',
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'green !important',
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
  paper: {
    padding: theme.spacing(3),
    border: 'solid 0.2px',
    borderRadius: '5px',
  },
}))
