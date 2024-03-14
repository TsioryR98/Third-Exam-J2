/*
cleanString('abc#d##c'), 'ac'
cleanString('abc####d##c#'), ''  
*/


function cleanString(s) {
    let backSpaced = true;
    let arrayOfStrings = s.split("")

    while (backSpaced) {
        backSpaced = false
        for (let index = 0; index < arrayOfStrings.length-1; index++) {

            if (("azertyuiopqsdfghjklmwxcvbn".includes(arrayOfStrings[index]) && arrayOfStrings[index+1] === "#") 
            ){
                arrayOfStrings.splice(index,2)
              backSpaced = true
              break;
            } 
            }      
    }
    if (arrayOfStrings.includes("#")) {
        return "";
    }
    return arrayOfStrings.join("");
}



function cleanString(s) {
    let result = [];

    for (let char of s) {
        if (char === "#") {
            result.pop();
        } else {
            result.push(char);
        }
    }

    return result.join("");
}

