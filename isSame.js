/*
console.log("i’m programer");

function isSame(name1, name2) {
  // write your code here
  let n1 = name1.split("");
  let n2 =name2.split("");

 if (n1.length!=n2.length)
  return 'غير متشابهتين';

  else{
  for(let i=0;i<n1.length;i++){

  if (n1[i]!=n2[i])
  return 'غير متشابهتين';
}
  
  return 'متشابهتين';
}

}
let result='hi';
result=isSame("AMAL","AMAL");
console.log(result);

function match_array(array1, array2){
  // write your code here
  let n1 = array1;
  let n2 =array2;

 if (n1.length!=n2.length)
  return 'false';

  else{
  for(let i=0;i<n1.length;i++){

  if (n1[i]!=n2[i])
  return 'false';
}
  
  return 'true';
}
}
*/
function factorial(number) {
  // write your code here
  let f=1;
  for(let i=1;i <= number;i++){
f=f*i;
}

  return f;
}
console.log(factorial(6));

function wordRepeat(word, n) {
  // write your code here
  let s='';
  for(let i=0;i < n;i++)
  s=s+word+' ';
  return s;
}
function subArrays(arr1, arr2) {
  // write your code here
  let c=[];
  
  for(let i=0;i < arr1.length;i++)
  c[i]=arr2[i]-arr1[i];
  
  return c;
}
console.log(subArrays([4,2,88],[2,4,88]));
function mostFrequentElement(a) {
  // write your code here
    let count = 1, tempCount;
  let popular = a[0];
  let temp = 0;
  for (let i = 0; i < (a.length - 1); i++)
  {
    temp = a[i];
    tempCount = 0;
    for (let j = 1; j < a.length; j++)
    {
      if (temp == a[j])
        tempCount++;
    }
    if (tempCount > count)
    {
      popular = temp;
      count = tempCount;
    }
  }
  return popular;
}
/*
function primesNums(array) {
  // write your code here
  let prime=[];
  for(i in array)
 if ( array[i]%k==0)
 prime=prime.push(array[i])
 
 return prime
}
*/