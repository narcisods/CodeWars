// Dogs
// Complete the following program to add the definition of the Dog class.

// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here
// class Dog {
//   constructor(name,species,size) {
//     this.name = name
//     this.species = species
//     this.size = size
//   }
//     bark() {
//       if (this.size >= 60) {
//         return 'Grr! Grr!'
//       } else {
//         return 'Woof! Woof!'
//       }
//     }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


// class Character {
//   constructor(name, health, strength) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters
//     this.gold = 10 // gold starts at 10
//     this.keys = 1 // key starts at 1
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       );
//       target.health -= damage;
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`);
//       } else {
//         target.health = 0;
//         const bonusXP = 10;
//         const bonusGold = target.gold
//         const bonusKeys = target.keys
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold and ${bonusKeys} key(s)`
//         );
//         this.xp += bonusXP;
//         this.gold += bonusGold
//         this.keys += bonusKeys
//       }
//     } else {
//       console.log(`${this.name} can't attack (they've been eliminated)`);
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength, ${this.xp} XP points, ${this.gold} and ${this.keys} key(s)`;
//   }
// }

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());


class BankAccount {
  constructor(name) {
    this._name = name
    this.balance = 0
  }
  get name() {
    return this._name    
  }

  credit(value) {
    this.balance += value
  }
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}

accountsArr = ['Sean','Brad','Georges','Javiar','Tiffany','Brylon']

function addNewAccounts(array) {
  const accounts = []
  array.forEach((person) => accounts.push(new BankAccount(person)))
  return accounts
}

let accounts = addNewAccounts(accountsArr)

function creditAndDescribe(accounts) {
  for (let i = 0; i < accounts.length; i++) {
    accounts[i].credit(1000)
    console.log(accounts[i].describe())
  }
}

creditAndDescribe(accounts)
