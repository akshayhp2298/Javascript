function sortByGivenValue(data, orderBy, order) {
  cmpAsc = (a, b) => (a > b) - (a < b)
  cmpDesc = (a, b) => (a < b) - (a > b)
  data = data.sort(function(a, b) {
    let line = ``
    orderBy.forEach(
      (ele, i) =>
        (line +=
          order[i] == "asc"
            ? `${cmpAsc(a[ele], b[ele])} || `
            : `${cmpDesc(a[ele], b[ele])} || `)
    )
    line = line.substring(0, line.length - 4)
    return eval(line)
  })
  return data
}

const data = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 }
]
const orderBy = ["name", "age"]
const order = ["asc", "asc"]
console.log(sortByGivenValue(data, orderBy, order))
