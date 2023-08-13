import { db } from './conf'

export const getUptimeStatus = (apiKey) => {
  try {
    return db.query(
      'SELECT * FROM uptime_status WHERE api_key=$1',
      [apiKey]
    )
  } catch (error) {
    console.error(`Error select to uptime_status table: ${error}`)
  }
}

export const setUptimeStatus = ({ apiKey, monitorValue }) => {
  try {
    return db.query(
     'INSERT INTO uptime_status(api_key, monitor_value) VALUES ($1, $2) ON CONFLICT(api_key) DO UPDATE SET monitor_value=$2',
      [apiKey, monitorValue]
    )
  } catch (error) {
    console.error(`Error insert to uptime_status table: ${error}`)
  }
}