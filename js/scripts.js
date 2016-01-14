$(function(){
  //something here

  for(var i = 99; i > 0; i--){

    $("#bottles").append("<li>" + i + "bottles of beer on the wall, " + i + " bottles of beer, take one down pass it arround " + (i-1) +" bottles of beer on the wall!</li>");
  }
});
