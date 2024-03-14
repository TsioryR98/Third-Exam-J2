/*
scramble('rkqodlw', 'world'), true)
scramble('cedewaraaossoqqyt', 'codewars'), true)
scramble('jscripts', 'javascript'), false
*/

function scramble(strings1,strings2) {
    let count = 0;
    for (let element of strings2) {
        if (strings1.split("").includes(element)) {
            count++;
        }
    }
    if (strings2.length == count) {
        return true
    }
    return false;
}

console.log(scramble('rkqodlw', 'world'))
