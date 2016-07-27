export function formatTime(time) {
  const date = new Date(time * 1000)
  return date.toTimeString()
}

export function formatDate(offset) {
  const day = new Date()
  day.setDate(day.getDate() + offset)
  return day.toDateString().substr(0, 10)
}

export function getRandomIndex(len) {
  return Math.floor(Math.random() * (len + 1))
}
