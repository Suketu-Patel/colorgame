console.log("connected");
var colors = generateColor(6);
var squares=document.querySelectorAll(".square");
var pickedColor = colors[randomPicker(6)];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var title = document.querySelector(".title");
var stripe = document.querySelector("#stripe");
var resbtn = document.querySelector("#btn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var tracker = 6;
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){         // Easy Button
  tracker = 3;
  title.style.backgroundColor="#77abff";
  easyBtn.classList.add("buttonSelected");
  hardBtn.classList.remove("buttonSelected");
  resbtn.textContent="New Color";
  colors = generateColor(tracker);
  pickedColor = colors[randomPicker(tracker)];
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display="none";
    }
  }
});
hardBtn.addEventListener("click",function(){        //Hard Button
  tracker = 6;
  title.style.backgroundColor="#77abff";
  easyBtn.classList.remove("buttonSelected");
  hardBtn.classList.add("buttonSelected");
  resbtn.textContent="New Color";
  colors = generateColor(tracker);
  pickedColor = colors[randomPicker(tracker)];
  for(var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display="block";
  }
});
for(var i=0;i<squares.length;i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor=this.style.backgroundColor;
    if(clickedColor === pickedColor){
      changeColors();
      // colorDisplay.style.backgroundColor=pickedColor;
      messageDisplay.textContent = "Correct Answer";
      title.style.backgroundColor=pickedColor;
    resbtn.textContent="Play Again?"
    }
    else{
      this.style.opacity="0";
      messageDisplay.textContent = "Try Again!";
    }
  });
}
resbtn.addEventListener("click",function(){        //Reset Button
  colors=generateColor(tracker);
  pickedColor= colors[randomPicker(tracker)];
  colorDisplay.textContent = pickedColor;
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.opacity="1";
  }
  title.style.backgroundColor="#77abff";
  resbtn.textContent="New Color";
  messageDisplay.textContent="";
});
function changeColors(){
  squares.forEach(function(element){
    element.style.backgroundColor=pickedColor;
    element.style.opacity="1";
  });
}
function randomPicker(num){
  return Math.floor(Math.random()*num);
}
function random(){
   return Math.floor(Math.random()*255+1);
}
function generateColor(num){
  var arr = [];
  for(var i = 0;i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
  var red = random();
  var green = random();
  var blue = random();
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
