import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../components/header'
import Footer from '../components/footer'
import Uptime from '../components/uptime'
import Tabs from '../components/tabs'
import {
  API_KEYS_FRONTEND,
  API_KEYS_BACKEND,
  allEndpointsUptimeRobots,
} from '../lib/constants/endpoints'

export default function Home() {

  useEffect(() => {
    /* Add monitor value to Database */
    allEndpointsUptimeRobots.map(async apiKey => {
      try {
        await axios({
          method: 'POST',
          url: '/api/uptime/add',
          data: JSON.stringify({
            apiKey
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } catch (error) {
        console.error(error)
      }
    })
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div id="uptime">
          <Tabs>
            <div title={'frontend'}>
              {API_KEYS_FRONTEND.map(i => (
                <Uptime key={i} apiKey={i} />
              ))}
            </div>
            <div title={'backend'}>
              {API_KEYS_BACKEND.map(i => (
                <Uptime key={i} apiKey={i} />
              ))}
            </div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  )
}
