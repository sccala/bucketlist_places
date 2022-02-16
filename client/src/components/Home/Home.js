import { useState, useEffect } from 'react'
import { Container, Grow, Grid, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import useStyles from './styles'

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Grid
        container
        justify='space-between'
        alignItems='stretch'
        spacing={3}
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Grow>
  )
}

export default Home
