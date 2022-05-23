//test add
function initialize(){
    window.addEventListener('resize', drawGame, false);
    drawGame();
}

var attribute_names = ["Background", "Skin", "Eyes", "Mouth", "Nose", "Hair"];
var background_src = ["layers/Background/blue-10.png","layers/Background/pink-10.png"];
var eyes_src = ["layers/Eyes/black-40.png"];
var hair_src = ["layers/Hair/mohawk-10.png", "layers/Hair/poof-25.png", "layers/Hair/spiked-30.png"];
var mouth_src = ["layers/Mouth/lips-20.png"];
var nose_src = ["layers/Nose/nose-100.png"];
var skin_src = ["layers/Skin/brown-50.png"];
var attributes = [background_src, skin_src, eyes_src, mouth_src, nose_src, hair_src]
var current_avatar_attributes = [0, 0, 0, 0, 0, 0];
var attribute_count = 6;
var current_attribute = 0;
var current_option = 0;
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

  
  // create an array with each attribute in the correct order
  images = []
  for(var i=0; i<current_avatar_attributes.length; i++){
    img = new Image();
    img.src = attributes[i][current_avatar_attributes[i]];
    images.push(img);
  }  

  // Checks if every image has loaded, if yes then it calls createAvatar()
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

function drawAttributeCategory(){
  var mydiv = document.getElementById('button_div');
  console.log(typeof(mydiv));

  // var newdiv = document.createElement("div");
  // newdiv.innerHTML = "yoyo";
  // tempbut = new Image();
  // tempbut.src = attributes[current_attribute][0];
  // //console.log(attributes[current_attribute])
  // //mydiv.append(newdiv);
  console.log(mydiv);
}

//var options_index = 2;
function drawAttributeOptions(){
  // remove all slides
  $('.options_slick').slick('removeSlide', null, null, true);
  console.log("all slides removed");
  console.log(document.getElementById("options_slick"));

  //add slides for current attribute
  for(var i=0; i<attributes[current_attribute].length; i++){
    //options_index++;
    $('.options_slick').slick('slickAdd','<div><img src=' + attributes[current_attribute][i] + ' onclick="changeAttributeOption(' + i + ')"></h3></div>');
  }
  console.log("load hair");
  //console.log(options_index);
}
function changeAttributeCategory(attr){
  current_attribute = attr;
  document.getElementById("testprint").innerHTML= "current attribute: " + attr;
  drawAttributeOptions();
}

function changeAttributeOption(option){
  current_option = option;
  current_avatar_attributes[current_attribute] = option;
  drawAvatar();
  console.log("option: " + option);
}

// jquery stuff

$(document).ready(function(){
  $('.options_slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true
  });
});

$(document).ready(function(){
  $('.category_slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    // variableHeight:true
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});

