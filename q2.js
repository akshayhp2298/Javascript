function convert2DArray(line){
    let arr = []
    let str = line.split("\n")
    let title = str[0]
    title = title.split(",")
    str.shift()
    for(let l of str) {
        let obj = {}
        l = l.split(",")
        l.forEach((value,index) => {
            obj[title[index]] = value
        });
        arr.push(obj)
    }
    return arr
}
let line = "col1,col2\na,b\nc,d"
let x = convert2DArray(line)
console.log(x)