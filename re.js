function oddsVsEvens(num) {
    // write your code here
    let odd=0;
    let even=0;
    let num1=''+num;
   // return num1;
    for(let nm of num1){
let n=parseInt(nm);
      if(n%2==0)
      even=even+n;
      else
      odd=odd+n;
    }
    
    if(even<odd)
     return'odd';
    if(even>odd)
    return'even';
    else return'equal';
    
  }
  //console.log(oddsVsEvens(871));
  //console.log(oddsVsEvens(631));

  function addStrNums(num1, num2) {
    // write your code here

    if (!isNaN(num1) && !isNaN(num2)){

let num11=parseInt(num1);
let num22=parseInt(num2);
let result=num11+num22;
     return ''+result+'';

    }else return '-1';
  
  }
   // console.log(addStrNums('63','1'));

   //console.log(addStrNums('63','jk'));

   function inputType(value) {
  if(isNaN(value))  return 'string'
     // write your code here
     if(value%1==0) return 'integer'
     if(value%1 != 0) return 'double'
   //else return 'string'
   }
   //console.log(inputType('nora ahmad'));
   //console.log(inputType('345'));
   //console.log(inputType('7.76'));

   function countWords(txt) {
    // write your code here
    let count=0;
    let arr=txt.split('');
    for(let g=0;g<arr.length;g++){
    if(arr[g] == ' ')
    count=count+1;
    }
return count+1;
  }

  // console.log(countWords('hi my name is suzy'));
  function mergeSort(node1, node2) {
    // write your code here
    
   let n= node1.concat(node2);
   n.sort(function(a, b){return a - b});
    return n
    
  }
  //console.log(mergeSort([1,4,7],[2,4,3,5]))



  function replaceThe(txt) {
    //let st='';
    //let ind= /the [aeuiy]/i.exec(txt);
    let reg= /the [aeuiyo]/
    let found=reg.test(txt);
    //if(ind != null)
    if(found)
    {
      let reg = new RegExp('the',"i")
      txt=txt.replace(reg,'an');
    }
    else{
      let reg = new RegExp('the',"i")
      txt=txt.replace(reg,'a');
    }
   return txt;
  }



/*
  console.log(replaceThe('the umbrella'));
  console.log(replaceThe('Whats the use?'));
  console.log(replaceThe('I like to go to the park'));
  console.log(replaceThe('Get the box'));
  */
  function leftDigit(str) {
    // write your code here
   // let reg = new RegExp([0-9])
   const reg=/[0-9]/
   let left =str.search(reg);
  // return left;
return str[left];
    
  }
  //console.log(leftDigit('ycd3yhfvj'))

  function addFive(arr) {
   let result= arr.map(function(currentvalue ,index,array){

return currentvalue+'5'
   })
   return result
  }
  function removeSpecialCharacters(str) {
    let reg = new RegExp('#@!$/.')
    str.replace(reg, 'x');
    return str
   }
//console.log(removeSpecialCharacters('hi. my name i@!'))
function middleChar(word) {
	// write your code here
  if (word.length%2==0){
return word[word.length/2-1]+word[word.length/2 ];
  }
  else{
    return word[word.length/2 - 0.5]
  }

}
//console.log(middleChar('BARK'))
//console.log(middleChar('BAR'))

function firstNVowels(phrase, n) {
  // write your code here
  let reg= /[aeuiyo]/gi
  const b=phrase.match(reg)
 // return b
if(n>b.length)
  return'invalid';
else{
 let c=b.join('')+''
 //return c
let r= c.slice(0,n)
return r
}

}
console.log(firstNVowels('hostess',5))
console.log(firstNVowels('ProgrAmmEr',3))
