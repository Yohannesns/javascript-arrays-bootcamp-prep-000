var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"]

function addElementToBeginningOfArray(array,element){
 return  [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element){
   array.unshift(element)
   return array
}
 function addElementToEndOfArray(array,element){
   return  [array,...'element']

 }
 function destructivelyAddElementToEndOfArray(array,element){
   array.push(element)
   return array

}
 function accessElementInArray(array,index){
   return array[index];
    }
function destructivelyRemoveElementFromBeginningOfArray(array,element){
   array.shift(element)
   return array

 }
 function removeElementFromBeginningOfArray(array,element){
    return array.slice(1,array.length)

 }
function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop(element)
  return array

 }
 function removeElementFromEndOfArray(array,element){
  return array.slice(0, array.length - 1)

 }
