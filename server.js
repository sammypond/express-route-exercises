var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

// Add your routes below this line
// Add a route that goes to /parent and responds 
//with the string "I am the parent". Add two more routes, 
//one that goes to /parent/son and one that goes to parent/daughter
//1.)//ave each identify themselves accordingly.

app.get('/parent', function(req, res){
  res.send("I am the parent");
});

app.get('/parent/son', function(req, res){
  res.send("I am the son");
});

app.get('/parent/daughtor', function(req, res){
  res.send("I am the daughtor");
});

// Add a route that responds to the URL /hello/:name where 
//:name is a route parameter that the user will type in when 
//2.) they hit the URL. Have the route say Hello to the name provided.

app.get('/hello/SEI', function(req, res){
  res.send("Welcome to SEI!");
});

app.get('/hello/:name', function(req, res){
  res.send("Hello " + req.params.name);
});

// Add a route that responds to the URL /hello/SEI. 
// Have it respond with the string "Welcome to SEI!" a. 
// You may notice some trouble getting this route to work.
// Why do you think this is? Take a look at the route from 
//number 2 to see if it might be affecting things. 
//b. How can you change your routes to fix this issue?
//3.)



// Add a route that takes two route parameters, like so: 
// /:name/:thing. Have the route respond by saying the thing 
//to the name (e.g. "Thing, Name.)
//4.)

app.get('/parent/stepson/:name/:thing', function(req, res){
  res.send(req.params.name + ' ' + 'likes' + ' ' + req.params.thing);
});



// Add a route that responds to the URL /console that takes a query 
//string. Inside your route function, simply have it console log that
// query string. Where is the console in a Node/Express app? 
//Check to make sure the key-value pairs printed. When you are done, 
//at the end of the function, just respond with "done". 
//(Is your wildcard route messing things up? Might need to move 
//more specific things above less specific things.)
//6.)

app.get('/console', function(req, res){
  res.send("done");
})



//7.) 
app.get('/color', function(req, res){
  var colorString = req.query.color;
  res.send(`<h1 style="color: ${colorString};">COLOR</h1>`)
});



//Add a route that uses the wildcard /* to take at least 6 strings 
//separated by forward slashes. You should store them in an array, 
//change every even-indexed word in the array to uppercase, join 
//them into a string, and respond with that string.
//5.)

app.get('/*', function(req, res){
  var myStrArr = req.params[0].split('/');
  var strs = myStrArr.map(function(word, index){
    if(index % 2 === 0) {
      return word.toUpperCase();
    } else {
      return word;
    }
  });
  var newString = strs.join(' ');
  res.send(newString);
});

// Add your routes above this line
app.listen(8000);
