import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Paper } from '@material-ui/core'
import { getPosts } from '../../actions/posts'
import Pagination from '../Pagination'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <div className='justify-between'>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Paper>
        <Pagination />
      </Paper>
      <Posts setCurrentId={setCurrentId} />
    </div>
  )
}

export default Home
