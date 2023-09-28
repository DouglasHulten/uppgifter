const sentence = 'Hello there';
const word = 'Hell';

console.log(`The word "${word}"  ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
console.log(sentence.startsWith('Hell'));
