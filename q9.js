function deleteKey(obj,key){
    delete obj[key]
    return obj
}


let obj = { name: "JJ", job: "programmer", age: 22 }
console.log(deleteKey(obj,'job'))