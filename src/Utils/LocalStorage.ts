const saveToLS = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data))
}
const loadFromLS = (key: string) => {
  const dataString = localStorage.getItem(key) ?? null
  return dataString ? JSON.parse(dataString) : dataString
}

export { saveToLS, loadFromLS }
