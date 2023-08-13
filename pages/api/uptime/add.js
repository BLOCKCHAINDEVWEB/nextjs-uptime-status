import { setUptimeStatus } from '../../../lib/db/queries'
import { GetMonitors } from '../../../lib/uptimeRobot'
import { getUptimeStatus } from '../../../lib/db/queries'

export default async function setUptimeStatusDbByKey(req, res) {
  const { method, body } = req

  if (method !== 'POST') 
    return res.status(405).json({ message: "Method not valid" })

  const { apiKey } = body
  if (!apiKey) {
    return res.status(422).send({ error: "Missing the apiKey and/or monitor value" })
  }

  try {
    let resultMonitor

    const { rows: [{ updated_date, monitor_value }={}]=[] } = await getUptimeStatus(apiKey)

    const lastDate = new Date(updated_date).getTime()
    const nextDate = new Date().setHours(1,0,0,0) + 24 * 60 * 60 * 1000 // 1 day

    nextDate < lastDate
      ? resultMonitor = monitor_value
      : resultMonitor = await GetMonitors(apiKey)

    setUptimeStatus({ apiKey, monitorValue: JSON.stringify(resultMonitor) })

    return res.status(200).json({ message: 'Success insert to the database' })
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error: "Error inserting the uptimeMonitorValue to the database" })
  }
}