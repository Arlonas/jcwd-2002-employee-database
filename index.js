// Duplikasi  method .find
// Duplikasi method  .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

// Condtions (find)
// 1. Mencari sebuah value (item) dalam array yang memenuhi condition yang ktia berikan
// 2. Callback function kita

const ages = [3, 10, 18, 25, 20, 27];

const duplicateFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
};
let agesFind = duplicateFind(ages, (val) => {
  return val > 18;
});

// console.log(agesFind);


const fruits = ["Banana", "Orange", "Apple", "Mango"]
let  duplicateIndexOf = (val, arr) => {
  for(let i = 0; i < arr.length; i++){
      if((val) == arr[i]){
          return i
      }
  }
  
  return -1
}

console.log(duplicateIndexOf("Banana", fruits))






let index = fruits.indexOf("Apple")
// console.log(index)

const age = [7, 1, 3, 2, 5, 8, 3]

// const copyFruits = [...fruits]

// copyFruits.sort()
// console.log(copyFruits)

ages.sort((a, b) => {
    return a-b
})
console.log(ages)