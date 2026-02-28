//1.Multiply each value of an array by ten [ Map ]

 var myArray = [12,2,2,4,1];
  var result = myArray.map(function(e){
    return e*10;
  });
  console.log(result);

//2.Filter Even Numbers [ Filter ]

var myArray = [12, 5, 7, 8, 3, 2]; 
var result = myArray.filter((e)=> e % 2 == 0);
console.log(result);
