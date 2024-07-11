
const app = require('./app')

//var x= '20'
// if (x===20) {
//     console.log("matched")
// }
console.log(app.x)
console.log(app.z())
const arr = [2, 4, 7, 1, 3, 8, 3]
let result = arr.filter((item) => {
    //console.log(item)
    return item === 3
})
console.log(result)


