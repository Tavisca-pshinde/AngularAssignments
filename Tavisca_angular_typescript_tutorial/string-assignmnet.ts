console.log("Convert a string in Statement Case");
let tests: string[] = ['This', 'is', 'test','array'];
console.log(tests.join(" "));


console.log("Print number of words in the string");
let testStatement=tests.join(" ");
console.log(testStatement.split(" ").length);

console.log("List all strings having character 'a' in it");
for(let test of tests)
{
    let matchOfA = (test.match(/a/g)||[]).length;
    if(matchOfA>0)
    {
        console.log(test);
    }
}

console.log("Print number of matching Words in string");
const testString = "the the the No Yes No Yes"

testString.split(" ").forEach((word) => {
  const numberOfOccurrences = testString.match(RegExp(word, "gi")).length
  console.log(`${word} - ${numberOfOccurrences}`)
})