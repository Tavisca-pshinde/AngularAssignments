console.log("Convert a string in Statement Case");
var tests = ['This', 'is', 'test', 'array'];
console.log(tests.join(" "));
console.log("Print number of words in the string");
var testStatement = tests.join(" ");
console.log(testStatement.split(" ").length);
console.log("List all strings having character 'a' in it");
for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
    var test = tests_1[_i];
    var matchOfA = (test.match(/a/g) || []).length;
    if (matchOfA > 0) {
        console.log(test);
    }
}
console.log("Print number of matching Words in string");
var testString = "the the the No Yes No Yes";
testString.split(" ").forEach(function (word) {
    var numberOfOccurrences = testString.match(RegExp(word, "gi")).length;
    console.log(word + " - " + numberOfOccurrences);
});
