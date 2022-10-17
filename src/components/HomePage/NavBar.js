import React from 'react'
import classes from './NavBar.module.css'
import icon from '../../images/Icon.png'
import Button from '../UI/Button'

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <img src={icon} alt="Website Logo" />
      <Button>Talk to us</Button>
    </nav>
  )
}

export default NavBar