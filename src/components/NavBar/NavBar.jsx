

import { useEffect, useState } from 'react'
import './NavBarStyle.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../App'
import { useContext } from 'react'


const NavBar = ({ menu }) => {
  const [list, setlist] = useState(false)
  const { val, setval } = useContext(ThemeContext)



  useEffect(() => {
    localStorage.setItem("value", val)
    const savedval = localStorage.getItem("value")
    if (savedval == 'true')
      setval(true)
    else
      setval(false)
  }, [val])

  return (
    <div className={(val) ? "light-mode " : "dark-mode"}>
      <nav className={(val) ? "light-mode " : "dark-mode"}>

        <div className='logo'>

          RH portfolio

        </div>

        <ul >

          {menu.map((element, i) => {
            return (

              <li key={i}> <Link to={element.path} className={(val) ? 'dark-color' : 'light-color'}> {element.title} <div className={element.class} /></Link></li>

            )
          }


          )}
        </ul>
        <div className='light'>
          <i className={(val) ? "fa-regular fa-moon" : "fa-regular fa-sun"} onClick={() => {
            setval(!val)
          }}
          ></i>


          <span onClick={() => { setval(!val) }}>{(val) ? 'Dark mode ' : 'Light mode'}</span>
        </div>

        <button className="list-r" onClick={() => { setlist(!list) }}><i className="fa-solid fa-bars"></i></button>

      </nav>

      <div className={(val) ? 'light-mode media-list' : 'dark-mode media-list'} style={{ display: (list) ? "block" : "none" }}>
        <i className="fa-solid fa-xmark close" onClick={() => { setlist(!list) }}></i>

        <ul className='menu1' >

          {menu.map((element, index) => {
            return (

              <li key={index} > <Link to={element.path} className={(val) ? 'dark-color' : 'light-color'}>  {element.title}</Link>  </li>

            )
          }


          )}
        </ul>
        <div className='switch'>
          <span>Dark mode </span>
          <div className='outt'><div className={(val) ? ' circle' : 'translate-left circle'} onClick={() => { setval(!val) }}></div></div>
        </div>
      </div>
    </div>


  )
}
export default NavBar