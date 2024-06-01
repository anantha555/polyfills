String.prototype.myCharAt = function(index){
  const rightIndex = index === null || index === undefined || isNaN(index) ? 0 : index;
  
  if(rightIndex < 0 || rightIndex > this.length){
    return '';
  }
  
  return this[rightIndex];
}

const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.myCharAt(index)}!`);
console.log(`The character at index ${index} is ${sentence.charAt(index)}!`);



console.log(`The character at index ${index} is ${sentence.myCharAt(undefined)}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt(null)}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt()}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt(0)}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt(4)}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt(44444)}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt(-44444)}!`);
console.log(`The character at index ${index} is ${sentence.myCharAt(-4)}!`);
