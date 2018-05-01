let dropButteredToastOnFloor = (success, failure) => {
   let drop = Math.random();
   if (drop < 0.5) {
      console.log("Landed butter-side up!");
      success();
   } else {
      console.log("Landed butter-side down...");
      failure();
   }
}

function dropToastPromisified() {
   return new Promise(function(resolve, reject){
    dropButteredToastOnFloor(resolve,reject);
   });
}

dropToastPromisified()
   .then(()=>{
      alert('Whew, that was close!');
   }).catch(()=>{
      alert('Well shucks, there goes my toast...');
   });