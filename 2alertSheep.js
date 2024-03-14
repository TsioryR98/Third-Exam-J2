/*
alertSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Run sheep 2!"
alertSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Run sheep 5!"
alertSheep(["sheep", "sheep", "wolf"]), "Go away!"
*/

let position1 = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]
let position2 = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]

function alertSheep(position) {
    let count = 0;
    for (let index = position.indexOf("wolf")+1 ; index < position.length; index++) {
        count++
    }
    if (position.indexOf("wolf") === position.length - 1 ) {
        return "Go away !"
    }
    return `Run sheep ${count} !`;
}
console.log(alertSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(alertSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
console.log(alertSheep(["sheep", "sheep", "wolf"]))
console.log(alertSheep(["wolf"]))