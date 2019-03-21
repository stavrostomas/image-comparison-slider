//Import Styles
import '../styles/main.scss';


//Selections
////////////
var imageContainer = document.querySelector(".image-comparison-container");
var before = document.querySelector(".image-comparison-container .before");
var after = document.querySelector(".image-comparison-container .after");
var containerPosition = imageContainer.getBoundingClientRect();
var isDraggable = false;

//Events
////////

//Mouse
imageContainer.addEventListener("mousedown", drag);
imageContainer.addEventListener("mouseup", stopdrag);
imageContainer.addEventListener("mouseout", stopdrag);
imageContainer.addEventListener("mousemove", move);

//Touch
imageContainer.addEventListener("touchmove", touchMove);

//Functions
///////////
function drag(){
    isDraggable = true;
}

function stopdrag(){
    isDraggable = false;
}

function move() {
    if (isDraggable) {
        if( event.clientX > (containerPosition.left + 20) && event.clientX < (containerPosition.right -20 )) {
            after.style.width = event.clientX - containerPosition.left + "px";
        } 
    }
}

function touchMove() {
    if( event.touches[0].pageX > (containerPosition.left + 20) && event.touches[0].pageX < (containerPosition.right -20 )) {
        after.style.width = event.touches[0].pageX - containerPosition.left + "px";
    } 
}



