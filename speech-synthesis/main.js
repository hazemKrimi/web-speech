var container = document.querySelector("#container");
var text = document.querySelector("input");
var speak = document.querySelector("#speak");
var synth = window.speechSynthesis;

speak.addEventListener("click", function(){
    var utter = new SpeechSynthesisUtterance(text.value);
    synth.speak(utter);
    console.log(utter);
});