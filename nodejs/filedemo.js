var fs=require('fs');
fs.readFile("test.txt",function(err,data){
  if(err){
      console.log(err);
  }else{
      console.log(data.toString());
  }

});
console.log("program end");
console.log("program end123");