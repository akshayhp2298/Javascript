const convertTo24Hours = num => {
  if(num >= 24) return "Invalid"
  let H = num
  let h = H % 12 || 12
  let ampm = H < 12 ? " AM" : " PM"
  ts = h + ampm
  return ts
}
console.log(convertTo24Hours(24))
