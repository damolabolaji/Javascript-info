//CAMEL CASE
function camelCase(string){
    stringArray = string.split('-')
    sum = ''
   for(let i = 1; i < stringArray.length; i++){
    sum += stringArray[i].charAt(0).toUpperCase()  + stringArray[i].slice(1)
   }
   
    
    console.log(stringArray[0] + sum);
}

//Option two
camelCase("british-toad-cast")

function camelize(str) {
    console.log (str.split('-') .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(''));
  
}

//FILTER RANGE IN PLACE
function filterRangeInPlace(array,num1,num2){

    for(let i = 0; i < array.length; i++){
        if ( array[i] < num1 || array[i] > num2){
            array.splice(i, 1);
            i--;
        }
    }
    // array.map((item, index) => {if(item >= num1 && item <= num2){item }  
    // else (array.splice(index,1))})
    console.log(array)
  }

//SORT IN DECREASING ORDER
  array.sort((a,b) => b - a)//sorts the array in decreasing order
  console.log(array)

