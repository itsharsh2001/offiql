import React from 'react'
import classes from './Banner.module.css'
import banner from '../../images/Banner.png'
import Button from '../UI/Button'

const Banner = () => {
  return (
    <section className={classes.banner}>
      <h1>Grow your Business with Email Automation</h1>
      <img src={banner} alt="Banner" />
      <Button>Get Started</Button>
    </section>
  )
}

export default Banner