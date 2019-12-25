function getSubArray(arr) {
  let i, j, temp
  let result = []
  let arrLen = arr.length
  let power = Math.pow
  let combinations = power(2, arrLen)
  for (i = 0; i < combinations; i++) {
    temp = []
    for (j = 0; j < arrLen; j++) {
      if (i & power(2, j)) {
        temp.push(arr[j])
      }
    }
    result.push(temp)
  }
  return result
}
console.log(getSubArray([1, 2]))
