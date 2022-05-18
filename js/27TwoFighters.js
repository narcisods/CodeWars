console.log('codewars')
// 5.18.22 ** COULDNT SOLVE

// 7 Kyu
// Two Fighters, one winner
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/javascript

//Details

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }



//PREP
//PARAMETER: What can you take in?
    // Takes in two objects which include methods on how they interact witheachother
//RETURNS: How? print to console? Return?
    // return the winner of the fighter
//EXAMPLES: Examples of how the code should work?
// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") // Lew is the winner
//PSEDUO CODE: Write pseduo code for everything
    //Create a constructor for each fighter
    //In the constructor, create a method on how they fight
    //Iniate the fight but firstAttacker
    //Return the winner of the fight


// My Solution
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
}

// function declareWinner(fighter1, fighter2, firstAttacker) {
 
 
//     if (fighter1.health <= 0) {
//         return fighter2.name
//     } else if (fighter2.health <= 0) {
//         return fighter1.name
//     } else if (firstAttacker == fighter1.name) {
//         while(true){
//         fighter1.attack(fighter2)
//         if (fighter1.health <= 0) {
//             return fighter2.name
//         } else if (fighter2.health <= 0) {
//             return fighter1.name
//         } else {
//             fighter2.attack(fighter1)
//         }
//     } } else { 
//         while(true){
//             fighter2.attack(fighter1)
//         if (fighter1.health <= 0) {
//             return fighter2.name
//         } else if (fighter2.health <= 0) {
//             return fighter1.name
//         } else {
//             fighter1.attack(fighter2)
//         }
        
//     }}
// }




// Codewars Solution 

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))


