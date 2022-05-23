//test add
function initialize(){
    window.addEventListener('resize', drawGame, false);
    drawGame();
}
var background = 0;
var eyes = 0;
var hair = 1;
var nose = 0;
var mouth = 0;
var skin = 0;
var background_src = ["layers/Background/blue-10.png","layers/Background/pink-10.png"];
var eyes_src = ["layers/Eyes/black-40.png"];
var hair_src = ["layers/Hair/mohawk-10.png", "layers/Hair/poof-25.png", "layers/Hair/spiked-30.png"];
var mouth_src = ["layers/Mouth/lips-20.png"];
var nose_src = ["layers/Nose/nose-100.png"];
var skin_src = ["layers/Skin/brown-50.png"];
var attributes = [background_src, skin_src, eyes_src, mouth_src, nose_src, hair_src]
var attribute_count = 6;
var current_attribute = 0;
// bg.src = "layers/Background/blue-10.png"
function drawGame(){
  drawAvatar();
  drawAttributeCategory();
  drawAttributeOptions();
}
function drawAvatar() {
  // Make new canvas for avatar
  var can = document.getElementById("canvas1");
  var ctx = can.getContext("2d");
  
  // Set the dimension of the canvas
  var canSize = window.innerWidth;
  if(window.innerWidth > window.innerHeight){
      canSize = window.innerHeight;
  }
  canSize = canSize*.80
  ctx.canvas.width  = canSize;
  ctx.canvas.height = canSize;
  ctx.fillRect(0, 0, canSize, canSize);

  // Load the image for each avatar attribute
  background_image = new Image();
  skin_image = new Image();
  eyes_image = new Image();
  mouth_image = new Image();
  nose_image = new Image();
  hair_image = new Image();
  
  background_image.src = background_src[background];
  skin_image.src = skin_src[skin];
  eyes_image.src = eyes_src[eyes];
  mouth_image.src = mouth_src[mouth]; 
  nose_image.src = nose_src[nose]; 
  hair_image.src = hair_src[hair]; 

  // array with each image in correct order
  images = [background_image, skin_image, eyes_image, mouth_image, mouth_image,nose_image,hair_image];

  // Checks if every image has loaded and calls createAvatar()
  var images_loaded = 0;
  for(var i=0; i<images.length; i++){
    images[i].onload = function () {
      images_loaded++;
      if(images_loaded == attribute_count){
        createAvatar();
      }
    }
  }
  // Adds all appropriate attributes to the canvas in the correct order
  function createAvatar(){
    for(var i=0; i<images.length; i++){
      ctx.drawImage(images[i], 0,0,canSize,canSize);
    }
  }
}
function changeAttributeCategory(attr){
  current_attribute = attr;
  document.getElementById("testprint").innerHTML= "current attribute: " + attr;
  drawAttributeOptions();
}

function drawAttributeCategory(){
  var mydiv = document.getElementById('button_div');
  console.log(typeof(mydiv));

  var newdiv = document.createElement("div");
  newdiv.innerHTML = "yoyo";
  tempbut = new Image();
  tempbut.src = attributes[current_attribute][0];
  //console.log(attributes[current_attribute])
  //mydiv.append(newdiv);
  console.log(mydiv);
}

var options_index = 2;
function drawAttributeOptions(){
  // remove all slides
  // for(var i=0; i<=options_index; i++){
  //   $('.options_slick').slick('slickRemove',options_index - 1);
  //   if (options_index !== 0){
  //     options_index--;
  //   }
  // }
  $('.options_slick').slick('removeSlide', null, null, true);
  console.log("all slides removed");
  console.log(document.getElementById("options_slick"));

  //add slides for current attribute
  for(var i=0; i<attributes[current_attribute].length; i++){
    options_index++;
    $('.options_slick').slick('slickAdd','<div><img src=' + attributes[current_attribute][i] + '></h3></div>');
  }

  console.log("load hair");
  console.log(options_index);
}



$(document).ready(function(){
  $('.options_slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});

$('.add-remove').slick({
  slidesToShow: 3,
  slidesToScroll: 3
});
$('.js-add-slide').on('click', function() {
  options_index++;
  $('.add-remove').slick('slickAdd','<div><h3>' + options_index + '</h3></div>');
});

$('.js-remove-slide').on('click', function() {
  $('.add-remove').slick('slickRemove',options_index - 1);
  if (options_index !== 0){
    options_index--;
  }
});

//initialize();

//dump
// from draw()
//   var background = new Image();
//   background.onload = function () {
//     ctx.drawImage(background, 0, 0, canSize, canSize);
//   };

//   background.src = "layers/skin/brown-50.png";
// var bg = new Image();

//failed loop in draw()
  // for(var i = 0; i<attributes.length; i++){
  //   image = new Image();
  //   image.onload = function(){
  //     ctx.drawImage(image, 0, 0, canSize, canSize);
  //   }
  //   image.src = attributes[i][0];
  //   console.log(attributes[i][0]);
  // }



    // eyes_image.onload = function () {
  //   ctx.drawImage(eyes_image, 0, 0, canSize, canSize);
  // };
  // draw mouth
  // mouth_image.onload = function () {
  //   ctx.drawImage(mouth_image, 0, 0, canSize, canSize);
  // };
  
  // draw nose
  // nose_image.onload = function () {
  //   ctx.drawImage(nose_image, 0, 0, canSize, canSize);
  // };

   //images = [background_image, skin_image, eyes_image, mouth_image, mouth_image,nose_image,hair_image];

  // for(var i=0; i<images.length; i++){
  //   images[i].onload = function () {
  //     images_loaded++;
  //     if(images_loaded == attribute_count){
  //       createAvatar();
  //     }
  //   }
  // }
