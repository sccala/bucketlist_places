import { useState, useEffect } from 'react'
import { Grow, Grid } from '@material-ui/core'
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
        <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Grow>
  )
}

export default Home
