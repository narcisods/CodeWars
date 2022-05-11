//Abbreviate a two word name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
    let upperName = name.toUpperCase()
    let firstLast = upperName.split(' ')
    
    let first = firstLast[0]
    let firstInital = first[0]
    
    let last = firstLast[1]
    let lastInital = last[0]
    
    
    let inital = `${firstInital}.${lastInital}`
    
    return inital
  
  }


  //better solution

  function abbrevName(name){

    let nameArr = name.split(" ")
    return (nameArr[0][0] + "." + nameArr[1][0]).toUpperCase()
  }