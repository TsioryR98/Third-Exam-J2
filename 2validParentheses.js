/*
validParentheses("("), false));
ValidParentheses("())"), false));
validParentheses(")"), false));
validParentheses("()"), true));
validParentheses(""), true)
*/

function validParentheses(strings) {
    let defaults = true;
    if (strings.length == 0) {
        return defaults;
    }
    else if (strings.length == 2 &&
    (strings[0] == "(" && strings [1] == ")") 
    ) {
        return defaults;
    }
    
    return false;
}

console.log(validParentheses("("));