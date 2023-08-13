import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Based on <Link href="https://uptimerobot.com/"><a>UptimeRobot</a></Link> API，Checking frequency is 5 minutes</p>
      </div>
    </div>
  )
}

export default Footer
