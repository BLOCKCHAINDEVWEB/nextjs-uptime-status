import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UptimeItem from './uptime-item'

const Uptime = ({ apiKey }) => {
  const [monitors, setMonitors] = useState(null)

  useEffect(async () => {
    try {
      const { data: { monitor_value: fetchMonitorFromDb } } = await axios.get(`/api/uptime/${apiKey}`)

      setMonitors(fetchMonitorFromDb)
    } catch (error) {
      console.error(error)
    }
  }, [apiKey])

  return monitors ? monitors.map(item => (
    <UptimeItem key={item.id} monitor={item} />
  )) : <div className="item loading"></div>
}

export default Uptime
