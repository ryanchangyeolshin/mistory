const omit = (target, keys) => {
  return Object.keys(target)
    .filter(key => !keys.includes(key))
    .reduce((copy, key) =>
      Object.assign(copy, { [key]: target[key] })
      , {})
}

module.exports = omit
