const path = require("path");
//this is where you serve all your  front end pages ( can rename the routes : /secondpage, /third page. **don't forget the front slash)
module.exports = function(app) {
  app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "/../public/index.html"));

  });

  app.get("/clients", function(request, response) {
    response.sendFile(path.join(__dirname, "/../public/clients.html"));
    //  console.log(path.join(__dirname, "vs13index.html"));
  });
  
  app.get("/link", function(request, response) {
    response.sendFile(path.join(__dirname, "/../public/link.html"));
    //  console.log(path.join(__dirname, "vs13index.html"));
  });
};
