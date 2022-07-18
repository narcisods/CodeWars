
console.log('codewars test')
// 11/18

// Kyu 8
// Surface Area and Volume of a Box
// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
//Details

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


//PREP
//PARAMETER: What can you take in?
    // 3 parameters
//RETURNS: How? print to console? Return?
    // return a string
//EXAMPLES: Examples of how the code should work?
    //  assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
//PSEDUO CODE: Write pseduo code for everything
    // arrow function to return width times hieght times depth


// My Solution
const getSize = (width, height, depth) => [((width*height)*2 + (height*depth)*2 + (depth*width)*2), (width * height * depth)]


// Codewars Solution 
// function getSize(width, height, depth){
//     var box = { width: width, height:height, depth:depth};
    
//     return [getArea(box), getVolume(box)];
//   }
  
  
//   function getArea(box){
//     return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
//   }
  
//   function getVolume(box){
//     return box.width * box.height * box.depth;
//   }
