let express=require("express");
let app= express();
app.use(express.json());
app.use(express.urlencoded({extended:"true"}));
app.get("/",(req,res)=>{
    console.log(" chandu saddi.com");
    res.send("29 aug");
})

app.get("/amit",(req,res)=>{
    console.log(req.body.husbandname);
    console.log(req.body.wifename);
    console.log(req.body.husbandmonth);
    console.log(req.body.wifemonth);
    console.log(req.body.husbandDay);
    console.log(req.body.wifeDay);
    console.log(req.body.husbandyear);
    console.log(req.body.wifeyear);
    var c=0;
if(req.body.husbandDay%2==0&&req.body.wifeDay%2==0 || req.body.husbandDay%2!==0&&req.body.wifeDay%2!=0){
    c++;
   
}
if(req.body.husbandmonth%2==0&&req.body.wifemonth%2!==0||req.body.husbandmonth%2!==0&&req.body.wifemonth%2==0){
c++;
console.log("hii everyon2");
}
if(req.body.husbandyear-5==req.body.wifeyear){
    c++
}
if(c==2){
    res.send("shaddi");
}
else{
    res.send("NOt marrige enjoy a life");
}
 
    
})

app.listen(4000,(req,res)=>{
    console.log("server is running");
});