var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var speechContainer = document.querySelector("#speech-container");
var paragraph = document.createElement("p");

recognition.lang = "en";

speechContainer.appendChild(paragraph);
recognition.addEventListener("result", function(e){
    paragraph.textContent = e.results[0][0].transcript;
    if(e.results[0].isFinal) {
        paragraph = document.createElement("p");
        speechContainer.appendChild(paragraph);
    }
    console.log(e.results[0][0].transcript);
});

recognition.addEventListener("end", recognition.start);
recognition.start();