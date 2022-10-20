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
