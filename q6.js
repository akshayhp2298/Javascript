function filterUnique(arr) {
  let result = []
  arr = arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] != arr[i] && arr[i] != arr[i + 1]) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(filterUnique([1, 1, 2, 2, 3, 3, 4, 5]))
