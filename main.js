x = 0;
y = 0;

draw_apple = "";

screen_width=0;
screnn_height=0;
apple="apple.png";
speak_data="";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  console.log("start complete");
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as " + content;
    
    to_number=Number(content);

  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Started drawing apple/apples";
  }

  else{
    document.getElementById("status").innerHTML="The system has not recgnised a number. Please try again.";
  }
  console.log("recognition onresult complete");
}

function setup() {
 screen_width= window.innerWidth;
 screen_height= window.innerHeight;
 createCanvas(screen_width, screen_height-150);
 console.log("setup complete");
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for(var i=1; i<= to_numberandomr; i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      s=Math.floor(Math.random()*500);
      image(apple, x, y, s,s)
    }
    
  }

  document.getElementById("status").innerHTML= to_number + "Apples drawn";

  speak_data=to_number + "Apples drawn";

  speak();
  console.log("draw complete");
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";

    console.log("speak complete");
}


function preload(){
  loadImage(apple);
  console.log("preload complete");
}