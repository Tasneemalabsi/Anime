let welcomingMessage=prompt("are you interested in physics?");
if(welcomingMessage == "yes") { alert("Welcome to the world of physics, you will find yourself here");}
else if (welcomingMessage == "no") {alert("please join us, you might change your mind");}
else {alert ("please enter a proper answer :)");}
console.log("the first question has to be answered by yes or no, it's more like a welcoming quesion");

let question =prompt("if your answer to the first question was yes, what's your favorite branch of physics?");
if (question== "quantum physics") {alert ("me too, let's know more about it together" );}
else {alert("you will have fun anyway");}
console.log("the second question depends on the first one, user has to choose a specific branch of physics");

let favField = prompt("what field do you prefer between quantum nuclear physics and quantum atomic physics ?")
while (favField != "quantum nuclear physics" && favField != "quantum atomic physics")
{favField= prompt("you have to choose a place of the two mentioned fields please");
}
if (favField == "quantum nuclear physics" || favField == "quantum atomic physics")
{alert("you can take a look about the information in our website and give a feedback");}
console.log("the third question has to be answered or you will go through an infinite loop, user has to choose one field of the two mentioned choices");


let rate= prompt("can you please rate our website from 1 to 5 ?");
alert("thank you for rating us");
for (var i = 1; i<=rate; i++){
    document.write('<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/1200px-Star_full.svg.png" width="50" height="50"/>');
  }
  console.log("the fourth question is about the feedback of the website, user has to give it a rate from 1 to 5, the rating will appear as star pictures on the bottom of the page");