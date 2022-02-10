// Duplikasi  method .find
// Duplikasi method  .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

// Condtions (find)
// 1. Mencari sebuah value (item) dalam array yang memenuhi condition yang ktia berikan
// 2. Callback function kita 

const ages = [3, 10, 18, 20, 25, 27]


const duplicateFind = (arr, callback) => {
    let resultArr = [];
    
    // const callback = (val) => {
    //     return val > 18
    //   }
    
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        resultArr.push(arr[i])
      }
    }
  
    return resultArr;

   
}
let filteredData = duplicateFind(ages, (val) => {
    return val > 18
  })


  console.log(filteredData)



