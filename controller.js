var names = [
"Marçal",
"Marsa",
"Marsa la Comparsa",
"Marsupesa",
"Marsi",
"Marsa Calamarsa",
"Marsu",
"La Marsellesa",
"DJ Marsa",
"Marsupas",
"Bruno Marsa",
"Marsupilami",
"Marsa ttack",
"Marcelo",
"Marcelino",
"El bueno de Marsi",
"Marsupiskas"
]
var name = "Marçal";
function getRandomName(){
  var aux = false;
  index++;
  while(!aux){
    var newName = names[Math.floor(Math.random()*names.length)];
    if(newName != name){
      aux = true;
    }
  }
 $("#name").text(newName);
 name = newName;
}