function convertObjectToString(arr, specifier) {
  let line = ""
  let title = Object.keys(arr[0])
  title.forEach(element=>line+=`${element}${specifier}`)
  line = line.substring(0, line.length - 1);
  line+="\n"
  arr.forEach(element => {
      let obj = Object.values(element)
      obj.forEach(val=>{
          line+=`${val}${specifier}`
      })
      line = line.substring(0, line.length - 1);
      line+="\n"
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
    b: 2
  }
]
console.log(convertObjectToString(obj, ";"))
