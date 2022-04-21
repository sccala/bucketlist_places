// @ts-nocheck
import { useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'
import { useDarkMode } from '../../hooks/useDarkMode'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isDark, setIsDark] = useDarkMode()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const logout = () => {
    dispatch({ type: LOGOUT })
    history.push('/')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <>
      <nav className='py-6  w-screen sticky'>
        <div className='flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4'>
          <a href='/'>
            <h1 className='flex text-xl text-gray-200 space-x-2 pointer tracking-wide cursor-pointer'>
              🌟 Bucket List Places
            </h1>
          </a>
          <section className=''>
            {user?.result ? (
              <>
                <div alt={user?.result.name} src={user?.result.imageUrl}>
                  {user?.result.name.charAt(0)}
                </div>
                <p style={{ color: 'lightgrey', margin: '0 5%' }}>{user?.result.name}</p>
                <button style={{ backgroundColor: '#740606' }} onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <button
                className='px-4 py-1 bg-red-900 shadow-sm text-sm rounded-md'
                onClick={() => history.push('/auth')}
                color='primary'
              >
                Sign In
              </button>
            )}
            <button
              className='items-center py-1 px-1 mx-2 text-white rounded-full text-base mt-4 sm:mt-0'
              onClick={isDark => setIsDark(prevState => !prevState)}
            >
              {isDark ? '🌛' : '🌞 '}
            </button>
          </section>
        </div>
      </nav>
    </>
  )
}

export default Navbar
