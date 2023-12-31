export const formatDuration = (seconds) => {
  let s = parseInt(seconds)
  let m = 0
  let h = 0
  if (s >= 60) {
    m = parseInt(s / 60)
    s = parseInt(s % 60)
    if (m >= 60) {
      h = parseInt(m / 60)
      m = parseInt(m % 60)
    }
  }
  let text = `${s} Second(s)`
  if (m > 0) text = `${m} Minute(s) ${text}`
  if (h > 0) text = `${h} Hour(s) ${text}`
  return text
}

export const fixed = (value) => {
  return (Math.floor(value * 100) / 100).toString()
}

export const convertFormatDate = (date) => {
  const initialDate = new Date(date)
  return initialDate.getFullYear() + '-' + ((initialDate.getDate() > 9) ? initialDate.getDate() : ('0' + initialDate.getDate()))+ '-' + ((initialDate.getMonth() > 8) ? (initialDate.getMonth() + 1) : ('0' + (initialDate.getMonth() + 1)))
}
