import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
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
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fill-rule='evenodd'
            clip-rule='evenodd'
          >
            <path d='M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181' />
          </svg>
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fill-rule='evenodd'
            clip-rule='evenodd'
          >
            <path d='M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181' />
          </svg>
          &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      )
    }

    return (
      <div className='flex mb-2 mt-4'>
        <svg xmlns='http://www.w3.org/2000/svg' width='14' viewBox='0 0 24 24' fill='gray'>
          <path d='M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z' />
        </svg>
        <div className='pl-1 text-sm'>Like</div>
      </div>
    )
  }

  return (
    <div className='flex flex-col relative bg-gray-100 dark:bg-secondary rounded-md shadow-sm h-full justify-between '>
      <div>
        <div className='pb-2/3'>
          <img
            alt={post.title}
            className='rounded-t-md h-48 w-full object-cover'
            src={post.selectedFile}
            title={post.title}
          />
        </div>
        <div className='absolute top-4 right-4 text-right'>
          <p className='text-sm text-gray-300 leading-3'>{post.name}</p>
          <p className='text-sm text-gray-300'>{moment(post.createdAt).fromNow()}</p>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <button className='text-gray-600' onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon className='text-base' />
          </button>
        )}
        <div className='py-0 px-4 '>
          <div className='flex my-2 '>
            <p className='text-accent text-sm text-right'>{post.tags.map(tag => `#${tag} `)}</p>
          </div>
          <p className='title text-primary bold py-0 '>{post.title}</p>
          <div>
            <p className='pt-2 text-sm text-primary line-clamp-3'>{post.message}</p>
          </div>
        </div>
      </div>
      <div className='px-4 pt-0 pb-2 flex'>
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
