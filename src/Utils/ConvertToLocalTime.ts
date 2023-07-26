const convertToLocalTime = (date: Date) =>
  new Date(+date - date.getTimezoneOffset() * 60000)
    .toISOString()
    .replace('T', ' ')
    .slice(0, -5)

export default convertToLocalTime
