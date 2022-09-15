console.log('Codewars test')
// 9/14
 
// 7 Kyu
// Likes vs Dislikes
// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript

//Details
// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.





//PREP
//PARAMETER: What can you take in?
    // Take in an array

//RETURNS: How? print to console? Return?
    // Return

//EXAMPLES: Examples of how the code should work?
    // likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

//PSEDUO CODE: Write pseduo code for everything
    // Iterate through array with conditionals


// My Solution
const likeOrDislike = buttons => {
    console.log(buttons)
      let result = 'Nothing'
      for (let i = 0; i < buttons.length; i++){
          if (buttons.length === 1) {
              result = buttons[0]
          } else if (result !== buttons[i]){
              result = buttons[i]
          } else if(result === buttons[i]) { 
              result = 'Nothing'
      }}
      return result
  }
// Codewars Solution  

// function likeOrDislike(buttons) {
//     let state = 'Nothing';
  
//     for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i] === state) {
//         state = 'Nothing'
//       } else {
//         state = buttons[i]
//       }
//     }
  
//     return state
//   }