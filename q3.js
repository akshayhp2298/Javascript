const convertObjectToString = (arr, value, specifier) => {
  let line = ""
  let title = value
  title.forEach(element => (line += `${element}${specifier}`))
  line = line.substring(0, line.length - 1)
  line += "\n"
  arr.forEach(element => {
    title.forEach(val => {
      line += `${element[val]}${specifier}`
    })
    line = line.substring(0, line.length - 1)
    line += "\n"
  })
  return line
}
let obj = [
  {
    a: 1,
    b: 2
  },
  {
    a: 1,
    b: 2,
    name: "akshay"
  }
]
console.log(convertObjectToString(obj, ["a", "name"], ";"))
