var names = [
"Marçal",
"Marsa",
"Marsa la Comparsa",
"Marsupesa",
"Marsi",
"Marsa Calamarsa",
"Marsu",
"La Marsellesa",
"Marsupas",
"Marsupilami",
"Marsa ttack",
"Marcelo",
"Marcelino",
"DJ Marsa",
"Bruno Marsa",
"El bueno de Marsi",
]
var name = "Marçal";
function getRandomName(){
  var aux = false;
  while(!aux){
    var newName = names[Math.floor(Math.random()*names.length)];
    if(newName != name){
      aux = true;
    }
  }
 $("#name").text(newName);
 name = newName;
}