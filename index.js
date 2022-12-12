function hasTargetSum(array, target) {
  const len = array.length;
  let sum;
  for (pos in array) {
    for (i = 0; i < len; i++) {
      if (array[pos] != array[i]) {
        sum = array[pos] + array[i];
        if (sum === target) {
          return true;
        }
      }
    }
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
*/

/*
  Add your pseudocode here
  declare a function that takes in an array of numbers and an target integer
  as an arguement 
  this function should return true if any pair of the numbers in the array sums up to   the target and false if none do
*/

/*
  Add written explanation of your solution here
  declared the function hasTargetSum() taking in two args; ta, declared one variable and assigned it the length of the array and initialized another to hold the sum of the pairs of the array's integers
  iterated through the array and added each element to the next one, and (or) previous one and assigned the result to the sum variable
  compared the sum to target, return two if they are equal and false when the array's elements have been traversed and added to every other.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
