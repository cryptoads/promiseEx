function addNumbers(x,y){
    var p = new Promise(function (resolve, reject){
        if(typeof x == 'number' && typeof y == 'number'){
            var sum = x + y;
            resolve(sum);
        }else{ 
            reject('not a number')
    }
    });
    return p;
};

var x = 'j';
var y = 9;

addNumbers(x, y)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });