/**
 * Remove all space in object properties if that property is a string
 * @param {object} source
 */
 export function trimObject(source: any) {
  Object.keys(source).forEach(function(key) {
    source[key] = typeof source[key] === 'string' ? source[key].trim() : source[key]
  })
  return source
}