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
"Marsupiskas",
"Marsupuestísimo que sí"
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
 document.getElementById("name").innerHTML = newName;
 name = newName;
}
