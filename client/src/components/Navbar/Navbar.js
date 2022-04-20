// @ts-nocheck
import { useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'
import { DarkModeToggle } from '../Toggle/Toggle'

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
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
      <nav className='py-6 bg-primary w-screen sticky'>
        <div className='flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4'>
          <p className='flex text-xl text-primary space-x-2'>🌟 Bucket List Places</p>

          <section className=''>
            {user?.result ? (
              <>
                <div alt={user?.result.name} src={user?.result.imageUrl}>
                  {user?.result.name.charAt(0)}
                </div>
                <div style={{ color: 'lightgrey', margin: '0 5%' }} variant='p'>
                  {user?.result.name}
                </div>
                <button
                  variant='contained'
                  style={{ backgroundColor: '#740606' }}
                  color='secondary'
                  onClick={logout}
                >
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
            {/* <DarkModeToggle /> */}
          </section>
        </div>
      </nav>
    </>
  )
}

export default Navbar
