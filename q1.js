function compareObj(obj1,obj2) {
    let a = Object.getOwnPropertyNames(obj1)
    let b = Object.getOwnPropertyNames(obj2)
    if(a.length!==b.length)return false
    a.forEach(element=>{
        if(obj1[element] !==obj2[element])
        return false
    })
    return true
}
const x = {
    a:'1',b:2
}
const y = {
    b:'1',a:2
}
console.log(compareObj(x,y))
