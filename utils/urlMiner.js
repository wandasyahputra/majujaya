export const urlMiner = (position, path) => {
  const urlToArray = path.split('/')
  return decodeURIComponent(urlToArray[position])
}
