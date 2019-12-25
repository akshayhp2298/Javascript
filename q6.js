function filterUnique(arr) {
    let result = []
    let map = new   Map()
    arr.forEach(element => {
        map.set(element,(map.get(element) || 0) + 1)
    });
    map.forEach((val,key)=>{
        if(val === 1) result.push(key)
    })
    return result
}
console.log(filterUnique([1,1,2,2,3,3,4,5]))