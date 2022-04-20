// @ts-nocheck
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts)

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div
      className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around'
      alignItems='stretch'
    >
      {posts?.map(post => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  )
}

export default Posts
