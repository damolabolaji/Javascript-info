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

//FILTER RANGE
// function filterRange(array,num1,num2){
//   let filterArray =  array.filter(item => (item >= num1 && item <= num2) )
//   console.log(filterArray)
// }
// array = [5,3,7,8,3,6,9]
// filterRange(array,2, 6)

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

//SORT IN DECREASING ORDER
  array.sort((a,b) => b - a)//sorts the array in decreasing order
  console.log(array)

//COPY SORTED ARRAY
let arraySort = ["HTML", "JavaScript", "CSS"];

let sortedArray = arraySort.slice().sort()// with weird letters, use sort( (a, b) => a.localeCompare(b) )

console.log(sortedArray)
console.log(arraySort)

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

 let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));


console.log(usersMapped)

