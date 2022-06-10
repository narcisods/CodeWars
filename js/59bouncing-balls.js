console.log('codewars')
// Date 6/9/22  

// Kyu 6
// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

//Details
// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.





//PREP
//PARAMETER: What can you take in?
    //  
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution


// const bouncingBall = (h,  bounce,  window) => {
//     let numberOfPasses = 1
//     // check for the three conditions for a valid experiemnt 
//     if (h <= 0 || bounce < 0 || bounce >= 1 || window >= h) {
//         return -1
//     } else {
//         // create a function that calls itself if bounce height is greater than window
//         (function checkBounce(bounceHeight, window) {
//             if (bounceHeight> window) {
//                 numberOfPasses += 2
//                 checkBounce((bounceHeight*bounce),window)   
//             }
//         })((h*bounce),window) 
//         return numberOfPasses
//     } 
// }



console.log(bouncingBall(3,.66,1.5))
// Codewars Solution 

function bouncingBall(h,  bounce,  window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
    return rebounds;
  }
