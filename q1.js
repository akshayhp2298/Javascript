function compareObj(obj1,obj2) {
    let a = JSON.stringify(obj1)
    let b = JSON.stringify(obj2)
    return a == b
}
const x = {
    a:'1',b:2
}
const y = {
    a:'1',b:2
}
console.log(compareObj(x,y))
