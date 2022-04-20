import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(like => like === (user?.result?.googleId || user?.result?._id)) ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize='small' />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      )
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize='small' />
        &nbsp;Like
      </>
    )
  }

  return (
    <div className='flex flex-col justify-between relative bg-gray-100 rounded-md shadow-sm h-full '>
      <div className='pb-2/3'>
        <img
          alt={post.title}
          className='rounded-t-md h-48 w-full object-cover'
          src={post.selectedFile}
          title={post.title}
        />
      </div>

      <div className='absolute top-1 left-2 '>
        <p className='text-sm text-gray-300'>{post.name}</p>
        <p className='text-sm text-gray-300'>{moment(post.createdAt).fromNow()}</p>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <button className='text-gray-600' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon className='text-base' />
        </button>
      )}
      <div className='py-0 px-2'>
        <div className='flex justify-between my-2'>
          <p className=''>{post.tags.map(tag => `#${tag} `)}</p>
        </div>
        <p className='text-base text-gray-500 py-0'>{post.title}</p>
        <div>
          <p className='text-sm text-gray-500'>{post.message}</p>
        </div>
      </div>
      <div className='px-4 pt-0 pb-2 justify-between flex'>
        <button
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
          className='text-gray-400'
        >
          <Likes />
        </button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <button
            color='primary'
            onClick={() => {
              dispatch(deletePost(post._id))
            }}
            className='text-gray-600'
          >
            <DeleteIcon fontSize='small' /> Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default Post
