module.exports=function (app){
    app.get("/api/friends",function(request,response){
    
        response.send(friendsData);
         
        
        console.log("friendsData!");
    })
    
    
    
    
    app.post("/api/userworkout",function(request,response){
   

        response.send("sent");
    
    });

    }