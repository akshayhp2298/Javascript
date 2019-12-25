function convertTo24Hours(num) {
  if (num > 24) return "invalid"
  if (num == 12) return "12PM"
  if (num == 0) return "12AM"
  return `${num % 12}${num > 12 ? "PM" : "AM"}`
}
console.log(convertTo24Hours(5))
