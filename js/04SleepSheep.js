// 8kyu
// If you can't sleep, just count sheep!!

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution

function countSheep(num) {
  let result = ""
  if (num === 0) {
    return result
  } else {
  for (let i = 1; i <= num; i++) {
  result += `${i} sheep...`
  }
  return result
}
}
// Codewars Solution 

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}