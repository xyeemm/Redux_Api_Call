function removeDuplicates(arr) {
    const uniqueElements = {};
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueElements[arr[i]]) {
        uniqueElements[arr[i]] = true;
        result.push(arr[i]);
      }
    }
    
    return result;
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
  
  function name() {
    arguments[0] + arguments[1]
  }

  name(5,15)