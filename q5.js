function replaceProperty(obj, renameKey) {
  let str = JSON.stringify(obj)
  let property = Object.keys(renameKey)
  property.forEach(element => {
    str = str.replace(element, renameKey[element])
  })
  obj = JSON.parse(str)
  return obj
}
let obj = { name: "JJ", job: "programmer", age: 22 }
let renameKey = { name: "firstName", job: "Role" }
console.log(replaceProperty(obj, renameKey))
