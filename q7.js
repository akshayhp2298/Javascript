function getBoolean(str) {
  let yes = /[YESyes]/g
  let no = /[NOno]/g
  let result = str.match(yes) || []
  if (result.length != 0) {
    if (result.includes("y") || result.includes("Y")) return true
    else return "not valid"
  }
  result = str.match(no) || []
  if (result.length != 0) {
    if (result.includes("n") || result.includes("N")) return false
    else return "not valid"
  }
}
console.log(getBoolean("nO"))
