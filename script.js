let arr = [1,2,3,4,5,6,7,8,9,10]
function removeEven(arr){
    for(let i = arr.length-1; i >= 0; i--){
        if(arr[i]%2 == 0){
            arr.splice(i,1)
        }
    }
    return arr
}
console.log(removeEven(arr))

let colors = [`red`, `green`, `yellow`, `red`, `blue`, `green`]
function removeDupliactes(colors){
    colors = new Set(colors)
    colors = Array.from(colors)
    return colors
}
console.log(removeDupliactes(colors))

let numCheckOne = new Set([2,5,8,6,7])
let numCheckTwo = new Set ([3,9,5,1,7])
function checkForNumber(numCheckOne, numCheckTwo){
    return numCheckOne.has(1)
    return numCheckTwo.has(3)
}
console.log(checkForNumber(numCheckOne))
console.log(checkForNumber(numCheckTwo))

let numArr = [1,2,3,4,5]
function objects(numArr){
    let result = []
    for(let x = 0; x < numArr.length; x++){
        let indvNum = numArr[x]
        let key = String(indvNum)
        let charCode = key.charCodeAt(0)
        let value = String(charCode)
        let object = {}
        object[key] = value
        result.push(object)
    }
    return result
}
console.log(objects(numArr))