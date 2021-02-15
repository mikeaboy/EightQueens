import EightQueen from "./EightQueen"
const eightQueen = new EightQueen(8)
const normalSolutions = eightQueen.getSolutions()
normalSolutions.forEach((value: String)=>{
    console.log("-----------------------\n" + value)
})
console.log("-----------------------\nsuccess count: " + normalSolutions.length)
        







