/*
        assert.strictEqual(pascalCase("test case"), "TestCase");
        assert.strictEqual(pascalCase("camel case word"), "CamelCaseWord"

*/

let strings1 = "test case";

function pascalCase(strings) {
    
    let newPascalCase = []
    function getFirstUpper(word) {
        let newWord = ""
        for (let i = 0; i < word.length; i++) {
            if (i == 0) {
                newWord += word[0].toUpperCase();
            }
            else if (i != 0){
                newWord += word[i]
            }}
            return newWord;
    }

    strings.split(" ").forEach(element => {
         newPascalCase.push(getFirstUpper(element))
    });
    return newPascalCase.join("");


}
console.log(pascalCase("camel case word"));