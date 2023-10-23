import React from 'react'
import { UseProvider } from './Context'
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs';
const ThemeToggle = () => {
    const {isDarkTheme,toggleDarkTheme}=UseProvider();
    
  return (
    <section className="toggle-container">
        <button onClick={toggleDarkTheme} className='dark-toggle'>
            {isDarkTheme?<BsFillMoonFill className='toggle-icon'/>:<BsFillSunFill className='toggle-icon'/>}
        </button>
    </section>
  )
}

export default ThemeToggle