import { getUptimeStatus } from '../../../lib/db/queries'

export default async function getUptimeStatusDbByKey(req, res) {
  const { method, query } = req
  const { key: apiKey } = query

  if (method !== 'GET') 
    return res.status(405).json({ message: "Method not valid" })
  try {
    const { rows: [uptimeMonitor]=[] } = await getUptimeStatus(apiKey)

    return res.status(200).json(uptimeMonitor)
  } catch (error) {
    console.error(error)

    return res.status(500).json({ message: `Error getting the monitor value from the database` })
  }
}