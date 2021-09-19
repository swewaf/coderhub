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
    console.log(addStrNums('63','1'));

   console.log(addStrNums('63','jk'));