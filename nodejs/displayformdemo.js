var http=require("http");
var fs=require('fs');
function proces_request(req,resp){
      var u=req.url;
	  resp.writeHead(200,{Content-type:"text/html"}
	  switch(u){
	      case "/": fs.readFile("form.html",function(err,data){
		       if(err){
			       resp.write("some error");
				   console.log(err);
			   }else{
			       resp.write(data);
				   resp.end();
			   
			   }
		  });
		      break;
		 default:
		    resp.write("in default case");
			resp.end();
		  
	  
	  }
	     
	 

}
var server=http.createServer(proces_request);
server.listen(2000);
console.log("server started, running at port 2000");