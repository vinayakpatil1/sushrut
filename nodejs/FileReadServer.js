var http=require("http");
var fs=require("fs");
function process_request(req,resp)
{
fs.readFile("test.txt",function(err,data){
resp.write(data);
resp.end();
});

}
var server=http.createServer(process_request);
server.listen(3000);
