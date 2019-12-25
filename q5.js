function replaceProperty(obj, renameKey) {
  let tmp = {}
  let property = Object.keys(renameKey)
  property.forEach(element => {
    if (obj[element]) {
      tmp[renameKey[element]] = obj[element]
      delete obj[element]
    }
  })
  return { ...tmp, ...obj }
}
let obj = { name: "JJ", job: "programmer", age: 22 }
let renameKey = { name: "firstName", job: "Role", firstName: "asdss" }
console.log(replaceProperty(obj, renameKey))
