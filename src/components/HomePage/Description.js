import React from 'react'
import classes from './Description.module.css'
import description from '../../images/Description.png'

const Description = () => {
  return (
    <main className={classes.description}>
      <section>
        <h3>AI <div className={classes.blue}>framework</div> </h3>
        <span>
          <h6>Personalisation</h6>
          <p>The advanced intelligent system assists in reaching out to customers and increasing conversion funnel.</p>
        </span>
        <span>
          <h6>Efficiency</h6>
          <p>Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.</p>
        </span>
        <span>
          <h6>Automation</h6>
          <p>Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.</p>
        </span>
      </section>
      <img src={description} alt="Description" />
    </main>
  )
}

export default Description