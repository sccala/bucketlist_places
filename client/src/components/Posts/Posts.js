// @ts-nocheck
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector(state => state.posts) // []=>{isLoading, numberofpages, posts:[]}
  if (!posts.length && !isLoading) return 'No posts'
  return isLoading ? (
    <CircularProgress />
  ) : (
    <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4 justify-around'>
      {posts?.map(post => (
        <Post key={post._id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  )
}

export default Posts
