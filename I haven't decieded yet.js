javascript:
var question = prompt("What is the answer");
if(question == "bombs") {
  alert("Correct");
}
else {
  alert("Worng");
  alert("You messed up");
  while(true){
  location.reload();
  }
  
}
