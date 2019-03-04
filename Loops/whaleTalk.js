const input = "Whooo-weeee!"
const vowels = ['a', 'e', 'o', 'u', 'i'];
let resultArray = [];
for(let i = 0; i < input.length; i ++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === 'e'){
      resultArray.push('ee');
    }
    else if(input[i] = 'u'){
      resultArray.push('uu')
    }
  }
}
console.log(resultArray.join("").toUpperCase());
// Output: UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEUUUUUUUUUU
