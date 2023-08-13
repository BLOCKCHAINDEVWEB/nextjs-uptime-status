import React, { useMemo } from 'react'
import htmr from 'htmr'
import ReactTooltip from 'react-tooltip'
import Link from 'next/link'

import { COUNT_DAYS } from '../lib/constants/endpoints'
import UptimeBlock from './uptime-block'
import { formatDuration, convertFormatDate } from '../utils/helper'

const UptimeItem = (props) => {
  const SHOW_LINK = false
  const { monitor } = props
  const status = {
    ok: 'Normal',
    down: 'Down',
    unknow: 'Unknown'
  }

  const total = useMemo(() => {
    return monitor.total.times
      ? `In Last ${COUNT_DAYS} Days, Down ${monitor.total.times} Times，Total Down ${formatDuration(monitor.total.duration)}，Average Uptime ${monitor.average}%`
      : `In Last ${COUNT_DAYS} Days, Uptime is ${monitor.average}%`
  }, [monitor])

  const initial = useMemo(() => {
    return monitor.daily[monitor.daily.length - 1].date
  }, [monitor])

  return (
    <div className="item">
      <div className="meta">
        <div className="info">
          <span className="name">{htmr(monitor.name)}</span>
          {SHOW_LINK && <Link href={monitor.url}><a className="link">{htmr(monitor.name)}</a></Link>}
        </div>
        <div className={`status ${monitor.status}`}>{status[monitor.status]}</div>
      </div>
      <div className="timeline">
        {monitor.daily.map((value, index) => (
          <UptimeBlock key={index} data={value} />
        ))}
      </div>
      <ReactTooltip className="tooltip" place="top" type="dark" effect="solid" />
      <div className="foot">
        <span>Today</span>
        <span>{total}</span>
        <span>{convertFormatDate(initial)}</span>
      </div>
    </div>
  )
}

export default UptimeItem
