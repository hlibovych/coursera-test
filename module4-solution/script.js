(function(){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var everyName in names) {

    var firstLetter = names[everyName].charAt(0).toLowerCase();;

    if (firstLetter == "j") {
      byeSpeaker.speak(names[everyName]);
    } else {
      helloSpeaker.speak(names[everyName]);
    }
  }

})();
