var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
    
})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    
})


resetButton.addEventListener("click", function(){
//    generate all new color
    colors = generateRandomColors(6);
//    pick a new random color from array
    pickedColor = pickColor();
//    change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    
    messageDisplay.textContent = '';
//    change colors of squares
    for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    }
  h1.style.background = "#232323";
    
})

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
//    add initial color to squares
    squares[i].style.background = colors[i];
    
//    add click listeners to squares
    squares[i].addEventListener("click", function(){
//        grab color of clicked square
        var clickedColor = this.style.background;
//        compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "try again";
        }
    })
}


function changeColors(color){
//    loop through all squares
    for(var i = 0; i < squares.length; i++){
//    change each color to match given color
        squares[i].style.background = color;
    }
}


function pickColor(){
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(num){
//    make an array
     var arr = [];
//    add num random colors to array
     for(var i =0; i < num; i++){
//        get random color and push into array
         arr.push(randomColor());
     }
//    return that array
     return arr;
}

function randomColor(){
//    pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
//    pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
//    pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

