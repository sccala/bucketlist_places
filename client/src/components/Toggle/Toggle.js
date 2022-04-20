import { useDarkMode } from '../../hooks/useDarkMode'

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className='flex flex-col'>
      <label className='mt-3 inline-flex items-center cursor-pointer'>
        <span className='relative'>
          <span className='block w-10 h-6 bg-gray-200 rounded-full shadow-inner-md'></span>
          <span
            className={`${
              isDark ? 'bg-indigo-400 transform translate-x-full' : 'bg-white'
            } absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition transform duration-300 ease-in-out`}
          >
            <input
              onClick={() => setIsDark(isDark ? 'light' : 'dark')}
              className='absolute opacity-0 w-0 h-0'
            />
          </span>
        </span>
        <span className='ml-3 text-sm'>{isDark ? 'Dark' : 'Light'}</span>
      </label>
    </div>
  )
}
