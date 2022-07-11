function fearNotLetter(str) {
  //find the missing letter in the string
  for (let i = 0; i < str.length; i++) {
    //loop through string to find missing letter
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      //if the character code of the current letter is not the same as the character code of the first letter plus the index of the current letter, return the missing letter
      return String.fromCharCode(str.charCodeAt(0) + i); //return the missing letter
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

//*Sorted Union
/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.*/
function uniteUnique(...arr) {
  //   const array = [...arguments]; //otra forma de hacer spread de los argumentos en el caso de que no haga spread en la funcion
  //   console.log(array);
  const unique = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      if (unique.indexOf(arr[i][j]) === -1) {
        unique.push(arr[i][j]);
      }
    }
  }
  return unique;
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

//?Then the spread operator in ...new Set() just converts this back into an array  🔥
const uniteUnique2 = (...arr) => [...new Set(arr.flat())]; //Set elimina los valores duplicados y flat() convierte el array en un array de un solo nivel
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

function uniteUnique3() {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind); //filter() elimina los valores duplicados y flat() convierte el array en un array de un solo nivel
}

console.log(uniteUnique3([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//*Convert HTML Entities
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}

// test here
console.log(convertHTML("Dolce & Gabbana"));

//*Sum All Odd Fibonacci Numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    console.log((currNumber += prevNumber));
    prevNumber = currNumber - prevNumber;
    console.log(prevNumber);
  }

  return result;
}

console.log(sumFibs(10));

/*
*Steamroller
Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));

function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray2([1, [2], [3, [[4]]]]));
/*Code Explanation
Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array */

//*Binary Agents
//Return an English translated sentence of the passed binary string.

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
