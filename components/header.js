import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


const Header = () => {
  const navigation = [
    {
      text: 'Website',
      url: '#'
    },
  ]

  return (
    <div id="header">
      <Head>
        <title>Uptime Status</title>
      </Head>
      <div className="container">
        <Link href="/">
          <a className="logo">Uptime status</a>
        </Link>
        <div className="navigation">
          {navigation.map((item, index) => (
            <Link key={index} href={item.url}>
              <a>{item.text}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
