import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    backgroundColor: 'lightgrey'
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    left: '10px',
    color: 'lightgrey',
  },
  overlay2: {
    position: 'absolute',
    top: '5px',
    right: '1px',
    color: 'lightgrey',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 15px',
  },
  title: {
    padding: '0 15px',
    lineHeight: '1.2em'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
})
