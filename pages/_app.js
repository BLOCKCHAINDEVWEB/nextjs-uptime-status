import { allEndpointsUptimeRobots } from '../lib/constants/endpoints'
import '../styles/globals.css'
import '../styles/Home.css'
import '../styles/Tabs.css'


function MyApp({ Component, pageProps }) {
  let initUptimeMonitors = []

  allEndpointsUptimeRobots.map(endpoint => {
    return initUptimeMonitors.push({ apiKey: endpoint, monitors: []},)
  })

  return <Component {...pageProps} />
}

export default MyApp
