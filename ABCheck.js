function ABCheck(str) { 
/* AB Check
Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. */
  // code goes here  
  for (let i = 0; i < str.length-4; i++) {
    if (str[i].match(/[abAB]/)) {
      if (str[i+4].match(/[abAB]/)) {
        return true;
      }
    }
  }

  return false; 

}
   
// keep this function call here 
console.log(ABCheck(readline()));