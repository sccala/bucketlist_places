import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Paper, Container, AppBar, TextField, Button } from '@material-ui/core'
import { getPosts } from '../../actions/posts'
import Pagination from '../Pagination'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useHistory, useLocation } from 'react-router-dom'
import useStyles from './styles'
import ChipInput from 'material-ui-chip-input'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const query = useQuery()
  const history = useHistory()
  const page = query.get('page') || 1
  const searchQuery = query.get('searchQuery')
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  const handleKeyPress = e => {
    //keycode 13 = enter key
    if (e.keyCode === 13) {
      //search post
    }
  }
  const handleAdd = (tag)=>setTags([...tags,tag])
  const handleDelete = (tagToDelete)=>setTags(tags.filter((tag)=>tag!==tagToDelete))

  return (
    <div className='justify-between'>
      <div>
        <input name='search'></input>
      </div>
      <div>
        <Posts setCurrentId={setCurrentId} />
      </div>
      <AppBar className={classes.appBarSearch} position='static' color='inherit'>
        <TextField
          name='search'
          variant='outlined'
          label='Search Memories'
          fullWidth
          value={search}
          onKeyPress={handleKeyPress}
          onChange={e => setSearch(e.target.value)}
        />
        <ChipInput
          style={{ margin: '10px 0' }}
          value={tags}
          onAdd={handleAdd}
          onDelete={handleDelete}
          label='Search Tags'
          variant='outlined'
        />
      </AppBar>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Paper>
        <Pagination />
      </Paper>
      <Posts setCurrentId={setCurrentId} />
    </div>
  )
}

export default Home
