function findElement(array, element) {
  // write your code here
  if(array.includes(element))
  return true;
  else
  return false;
}

let a=[1,2,3];
/*
function inputType(value) {
 
    if(value instanceof String)
    return 'String';
    else if (value instanceof integer)
    return ;
    else if(value instanceof double )
    return 'Double';
    }
console.log(inputType(3));
*/
function deleteElementInArray(arr, index) {
    // write your code here
    let a= arr.splice(index,1);
    return arr
  }
  function reverseCase(str) {
    // write your code here
    let n2="";
    let n1 = str.split("");
  
    //return n1;
    for(let i=0;i<n1.length;i++){
      
      let c=n1[i].charAt(0);
     // return c;
   if(c.toUpperCase()==n1[i].charAt(0))
    n2=n2+n1[i].toLowerCase();
   else
   n2=n2+n1[i].toUpperCase();
    }
    return n2;
  }
  //console.log(reverseCase("ABCdef g"));

 // console.log(deleteElementInArray(['a','b','c'],1));
 function sumTwoSmallestNums(arr) {
	// write your code here
	min1 =Math.min(...arr);
let neww;
  for(let i=0;i<arr.length;i++){
  if (arr[i]==min1)
	 neww=arr.splice(i,1);
   else 
   continue
  }
  min2 =Math.min(...arr);
   return min1+min2 ;

}
//console.log(sumTwoSmallestNums([1,2,3,1,4,1,5,1]));

function sortArray(array) {
  // write your code here
array.sort(function(a, b) {
  return a - b;
});
return array;
}
function sortArray(array, type) {
  // write your code here
  
  
if(type=='S'){
array.sort(function(a, b) {
  return a - b;
});
return array;
}
else
array.sort(function(a, b) {
  return b - a;
});
return array;
  
}
function filpEvenOdd(array) {
	// write your code here
	let r=[];
	 for(let i=0;i<array.length;i++){
	   if(array[i]%2==0){
     array[i]=1+array[i];
	   r[i]=array[i];}
	   else{
     array[i]=array[i]-1;
	    r[i]=array[i];}
	 }
	 return r;
	
}
//[24,13,14,18]
//console.log(filpEvenOdd([24,13,14,18]));

function dateFormating(date) {
 // let today=new Date(date); 
 let date1 = date.split("-");
 //return date1
let year=date1[0];
let day=date1[2];
let month =date1[1];
 //return year;
// let month = date.split("-", 2);
// let day = date.split("-", 2);
let today=day+'-'+month+'-'+year;
  return today;
  
}
//console.log(dateFormating('2020-02-10'));


//error 
function capSpace(txt) {
  // write your code here
  let index=0;
  let txt1='';
 let str=txt.split();
  for(let i =0;i<txt.length;i++){
   let c=txt.charAt(i);
   if(c==c.toUpperCase()){
   index=i; 
   return txt.slice(0,index)+' '+txt.slice(index,txt.length);
   }
  }
 
}// console.log(capSpace('hiYou'));
 // console.log(capSpace('goodMorning'));
 function match_array(array1, array2){
  // write your code here
  if (!(array1.length == array2.length))
  return 'false';
for(let i=0;i<array1.length;i++){
 let txt1=array1[i].toString();
 let txt2=array2[i].toString();
if( ! txt1.equals(txt2))
return 'false';
}
return 'true';
} 
 console.log(match_array(['A','B'],['Q','B']));