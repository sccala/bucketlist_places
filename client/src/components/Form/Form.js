// @ts-nocheck
import { TextField, Typography, Button } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useState, useEffect } from 'react'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

import { useSelector } from 'react-redux'

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const classes = useStyles()
  const dispatch = useDispatch()
  const post = useSelector(state => (currentId ? state.posts.find(p => p._id === currentId) : null))
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(null)
    setPostData({ title: '', message: '', tags: '', selectedFile: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }))
      clear()
    } else {
      dispatch(createPost(currentId, { ...postData, name: user?.result?.name }))
      clear()
    }
  }

  if (!user?.result?.name) {
    return (
      <div className={classes.signinrecommend} raised elevation={6}>
        <Typography variant='h6' align='center'>
          Please Sign In to create your own bucket list.
          <br /> and like other's list.
        </Typography>
      </div>
    )
  }

  return (
    <div className={classes.paper} raised elevation={6}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography style={{ letterSpacing: '2px', color: 'lightgrey' }} variant='h6'>
          {currentId ? 'Editing' : 'Creating'} a Bucket List
        </Typography>

        <TextField
          style={{
            letterSpacing: '2px',
            color: 'lightgrey',
            border: 'solid .1px lightgrey',
            borderRadius: '5px',
          }}
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'lightgrey',
            },
          }}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          style={{
            letterSpacing: '2px',
            color: 'lightgrey',
            border: 'solid .1px lightgrey',
            borderRadius: '5px',
          }}
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          multiline
          rows={2}
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'lightgrey',
            },
          }}
          InputProps={{
            className: classes.input,
          }}
        />
        <TextField
          style={{
            letterSpacing: '2px',
            color: 'lightgrey',
            border: 'solid .1px lightgrey',
            borderRadius: '5px',
          }}
          name='tags'
          variant='outlined'
          label='Tags (comma separated)'
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'lightgrey',
            },
          }}
          InputProps={{
            className: {
              input: classes.input,
              focused: classes.focused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          size='small'
          type='submit'
          fullWidth
          style={{ backgroundColor: '#740606', color: 'lightgrey' }}
        >
          Submit
        </Button>
        <Button
          style={{ backgroundColor: 'black', color: 'lightgrey' }}
          variant='contained'
          size='small'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </div>
  )
}
export default Form
