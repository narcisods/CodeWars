// Title 8
// Will there be enough space?


// Details
// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.





// My Solution

const enough= (cap, on, wait) => cap - on >= wait ? 0 : wait - (cap-on) 





// Codewars Best Practice Solution

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }