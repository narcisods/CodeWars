// Day 1

// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.


// COPY
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:


// COPY
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

// const mixUp = str => {
//     return str.split('')
//        .map(char =>{
//     switch(char){
//         case '0' : return 'O'        
//         case '1' : return 'I'      
//         case '2' : return 'Z'      
//         case '3' : return 'E'      
//         case '4' : return 'h'
//         case '5' : return 'S'
//         case '6' : return 'G'
//         case '7' : return 'L'
//         case '8' : return 'B'
//         default  : return char 
//         }
//     })
//         .join('')
// }

let key = {
    '0' : 'O',  
    '1' : 'I',      
    '2' : 'Z',      
    '3' : 'E',      
    '4' : 'h',
    '5' : 'S',
    '6' : 'G',
    '7' : 'L',
    '8' : 'B',
    '9' : 'q',
    '0' : 'O',  
    'I' : '1' ,      
    'Z' : '2' ,      
    'E' : '3' ,      
    'h' : '4' ,
    'S' : '5' ,
    'G' : '6' ,
    'L' : '7' ,
    'B' : '8' ,
    'q' : '9'
}

const mixUp = x => {
    return x.split('').map(char=>key[char]||char).join('')
}




console.log(mixUp("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))


// 🏆 The Challenge - Day 2
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// This is awkward... I had a challenge planned for today, but I kept the computer open while I went to water my plants and came back to chaos on the screen. Not to worry, though! I've figured out what happened and we'll fix it today, ready to get back to our main decoding functions tomorrow.

// It turns out that a cat snuck in the house and decided to do some typing while I was away from my desk. Lucky break though, somehow the last key the cat managed to type was a lowercase 'c', and it also somehow managed to be the only lowercase 'c' the cat typed.

// If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.


// COPY

// COPY
let mess = "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

// Function to fix cat mess
const catMess = str => {
    //1st fix
    let catFix = str.slice((str.indexOf('c')+1))
    //2nd fix
    let preScoolerFix = catFix.replaceAll('Eek!','')
    //3rd fix
    return preScoolerFix.split('').reverse().join('')
}

console.log(catMess(mess))

// Done it? Awesome. Next, it's just a simple matter of undoing what happens when a preschooler dumps a bucket of LEGO blocks on the keyboard. Kids, amiright? You'll want to remove all the instances of the word 'Eek!' in the remaining string please (case sensitive, of course).



// Oh, I also forgot that I accidentally reversed the whole string too. Flip it back around after you've dealt with the 'Eek!'s, if you will.

// It should be looking a lot better now. I left the instructions for what to do now at the start of the remaining string. Do what it says and save the answer somewhere safe for tomorrow's challenge - it's key info.

// Thanks for helping clean up this mess! 🧹 See you tomorrow!

// Answer to day 2 challenge
let answer = "Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu"

let answerShort = "S.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu"

const answerSplit = str => {
    let arr = str.split('v')
    console.log(arr)
    let result = []
    arr.forEach(element => {
        result.push(element[0])
    })
    return result.join('')
}

console.log(answerSplit(answer))

//Answer to day two is Space


//The Challenge - Day 3
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!


// COPY
// example key characters -> 'A','_','K','E','Y','!'

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'
// You didn't think I'd just give you the key for the week and let you skip Day 2, did you?

// 🕵️ Thank You for playing along!
// Before you head off to play with some string, I want to take a moment to thank those who have commented on the blog posts, shared likes, or tweeted about the daily challenges. It's been a huge joy for my deeply weird self to just create these ridiculous tasks, but knowing that even a few others are enjoying them means so much!

const spaceReplace = str => {
    return str.replaceAll(/[Space]/g,' ')
}


console.log(spaceReplace('1111S1111p1111a1111c1111e'))

// 🏆 The Challenge - Day 4
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

// So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:


// COPY
// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
// COPY
// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
// 🏅 Some extra work
// By now you should have written a function for each day so far. If not, go back and finish those up! Here are some things I'd suggest doing to build a deeper understanding of Strings and their manipulation:

// Explain your functions. Practice talking through your code.
// Check your function, parameter, and variable names. Good code should be clear to follow and should document itself.
// Rewrite your functions, taking a different approach. If you used String methods, try looping, and vice versa. Solve the problem via an alternate route and look for pros and cons of each.
// If you haven't yet, use the 4 functions you have so far (in order, Calculator fix -> Use the Day 2 key to add spaces -> Reverse the string), on our secret message. Compare your answer so far with others!


const reverseIt = str => {
    return str.split('').reverse().join('')
}

console.log(reverseIt(" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "))


// let twitterMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// const allFour = str => {
//     //first function from day 1
//     let one = mixUp(str)
//     console.log(one)
//     //2nd function from day 2 and 3
//     let two = spaceReplace(one)
//     console.log(two)
//     //4th function from day 4
//     let result = reverseIt(two)
//     return result
// }

// console.log(allFour(twitterMsg))

// 🏆 The Challenge - Day 5
// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// So, I may have bitten off a bit more than I can chew this week. Will you help me out?

// My friend has invented a 'Best Cat-Themed Pun of a TV Show Title Ever' award and I promised I'd help her with the submissions. The problem is, I didn't realize just how much help she would need whittling down the submissions to the finalists. Between work, family, and Huntober, I just don't have time to get the final list over to her. Can you help?

// Here is a comma-separated list of the submissions:


// COPY

// COPY
let puns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
// There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. I promise tomorrow we'll get back to decoding our secret message, and coincidentally, I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?

// Here are the rules these submissions had to follow:
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
// Send me a DM of the puns that made the cut on Twitter, and go ahead and save the final count to use tomorrow. Thanks!

// 🕵️ It still looks like Gibberish
// If you've started trying to decode this week's message you may be wondering if you're on the right track. Chances are if it still looks like someone mashed the keyboard, you're doing A-OK! Feel free to compare notes!

let punsArray = puns.split(',')

const removeSubmissions = arr => {
    arr.forEach((submission,index) => {
        //No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
        if (submission[0] === ' ' || submission[submission.length-1] === ' ') {
            arr.splice(index,1)
        } 
        // Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
        if (submission.toLowerCase().includes('dog'))
            
            arr.splice(index,1)


    })
    return arr
}

console.log(removeSubmissions(punsArray))