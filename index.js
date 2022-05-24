//test add
function initialize(){
    window.addEventListener('resize', drawGame, false);
    drawGame();
}

var attribute_names = ["Background", "Fur", "Shirt", "Face", "Hat"];
// var background_src = ["layers/Background/blue-10.png","layers/Background/pink-10.png","layers/Background/blue-10.png","layers/Background/pink-10.png","layers/Background/blue-10.png","layers/Background/pink-10.png","layers/Background/blue-10.png","layers/Background/pink-10.png"];
// var eyes_src = ["layers/Eyes/black-40.png"];
// var hair_src = ["layers/Hair/mohawk-10.png", "layers/Hair/poof-25.png", "layers/Hair/spiked-30.png"];
// var mouth_src = ["layers/Mouth/lips-20.png"];
// var nose_src = ["layers/Nose/nose-100.png"];
// var skin_src = ["layers/Skin/brown-50.png"];
var background_src = ['img/layers/background/Pink-55.png', 'img/layers/background/Binary-5.png', 'img/layers/background/Green-70.png', 'img/layers/background/Blue-85.png', 'img/layers/background/SMPTE-3.png', 'img/layers/background/Starry_Night-1.png', 'img/layers/background/Purple-25.png', 'img/layers/background/Red-40.png', 'img/layers/background/Sky-10.png', 'img/layers/background/Trippy-8.png'];
var face_src = ['img/layers/face/Cute-44.png', 'img/layers/face/Mask_Cat_White-12.png', 'img/layers/face/Mask_Froggy-10.png', 'img/layers/face/Kissy-48.png', 'img/layers/face/Bitcoin-20.png', 'img/layers/face/Mask_Color_Camo-26.png', 'img/layers/face/Pirate-32.png', 'img/layers/face/Cool_Glasses-40.png', 'img/layers/face/Mischievous-62.png', 'img/layers/face/Pizza-25.png', 'img/layers/face/Ethereum-20.png', 'img/layers/face/Lollipop-32.png', 'img/layers/face/Happy_Tongue-90.png', 'img/layers/face/Sad-70.png', 'img/layers/face/Bat_Mask-29.png', 'img/layers/face/Hypnotized-57.png', 'img/layers/face/Happy_Smile-95.png', 'img/layers/face/3D_Glasses-34.png', 'img/layers/face/Heart_Glasses-42.png', 'img/layers/face/Rainbow_Beard-15.png', 'img/layers/face/Virtual_Reality-13.png', 'img/layers/face/Mask_Cat_Black-12.png', 'img/layers/face/Upset-75.png', 'img/layers/face/Happy_Tooth-85.png', 'img/layers/face/Stars-22.png', 'img/layers/face/Bubble_Gum-38.png', 'img/layers/face/Mask_Cute_Creature-10.png', 'img/layers/face/Sly-68.png', 'img/layers/face/Flowers-54.png', 'img/layers/face/Mischievous_Tooth-64.png', 'img/layers/face/Costume_Mummy_Green-19.png', 'img/layers/face/Brown_Beard-47.png', 'img/layers/face/Diva-56.png', 'img/layers/face/Clout_Glasses-24.png', 'img/layers/face/Confused-66.png', 'img/layers/face/Angry-80.png', 'img/layers/face/Costume_Mummy_Red-19.png', 'img/layers/face/404-6.png', 'img/layers/face/Stunned-60.png', 'img/layers/face/Rainbow_Vomit-14.png', 'img/layers/face/What-58.png'];
var fur_src = ['img/layers/fur/Cream_Spotted-30.png', 'img/layers/fur/Pink-43.png', 'img/layers/fur/Binary-3.png', 'img/layers/fur/Blue-54.png', 'img/layers/fur/Black_Spotted-25.png', 'img/layers/fur/Trippy-5.png', 'img/layers/fur/Brown-92.png', 'img/layers/fur/Tiger-10.png', 'img/layers/fur/Brown_Spotted-35.png', 'img/layers/fur/Cream-72.png', 'img/layers/fur/Gold-1.png', 'img/layers/fur/Noise-8.png'];
var hat_src = ['img/layers/hat/Beanie_Cat_White-9.png', 'img/layers/hat/Cute_Plant-12.png', 'img/layers/hat/Beanie_Cute_Creature-9.png', 'img/layers/hat/Ethereum-31.png', 'img/layers/hat/Pete_Alarm_Red-35.png', 'img/layers/hat/Rubber_Ducky-14.png', 'img/layers/hat/Pizza-37.png', 'img/layers/hat/Rainbow_Afro-13.png', 'img/layers/hat/Rainbow_Unicorn-13.png', 'img/layers/hat/Hat_Purple-94.png', 'img/layers/hat/Bitcoin-30.png', 'img/layers/hat/Flower_Wreath_Orange-70.png', 'img/layers/hat/Shark_Bowl-10.png', 'img/layers/hat/Demon-18.png', 'img/layers/hat/Flower_Pink-88.png', 'img/layers/hat/Camo_Helmet-53.png', 'img/layers/hat/Wormy_Apple-65.png', 'img/layers/hat/Hat_World-48.png', 'img/layers/hat/Golden_Tiara-14.png', 'img/layers/hat/Costume_Duck_White-7.png', 'img/layers/hat/Hermans_Dog_House-3.png', 'img/layers/hat/Pete_Alarm_Blue-35.png', 'img/layers/hat/Golden_King_Herman-4.png', 'img/layers/hat/Flower_Orange-87.png', 'img/layers/hat/Astro_Dark-20.png', 'img/layers/hat/Beret_Black-75.png', 'img/layers/hat/Beanie_Froggy-9.png', 'img/layers/hat/Baby_Dragon-5.png', 'img/layers/hat/Beanie_Red_White-78.png', 'img/layers/hat/Dog_Bone_Wreath-46.png', 'img/layers/hat/Baby_Dino-10.png', 'img/layers/hat/Astro_Orange-20.png', 'img/layers/hat/Golden_Crown-14.png', 'img/layers/hat/Beanie_Black-80.png', 'img/layers/hat/Peace_Headband-51.png', 'img/layers/hat/Biker_Helmet-55.png', 'img/layers/hat/Bucket_Hat_Color_Camo-50.png', 'img/layers/hat/Lamp_Shade-62.png', 'img/layers/hat/Astro_Silver-20.png', 'img/layers/hat/Costume_Witch-16.png', 'img/layers/hat/Beanie_Cat_Black-9.png', 'img/layers/hat/Hat_Black-95.png', 'img/layers/hat/Gold_Earrings-40.png', 'img/layers/hat/Wizard-10.png', 'img/layers/hat/Halo-25.png', 'img/layers/hat/Pink_Bow-89.png', 'img/layers/hat/Costume_Duck_Yellow-7.png', 'img/layers/hat/Beanie_Pink-79.png', 'img/layers/hat/Artists_Beret-28.png', 'img/layers/hat/Cute_Flame-5.png', 'img/layers/hat/Beret_Green-74.png', 'img/layers/hat/Costume_Pirate-16.png', 'img/layers/hat/Flower_Blue-86.png', 'img/layers/hat/Bucket_Hat_Black-60.png', 'img/layers/hat/Bucket_Hat_Pink-60.png', 'img/layers/hat/Costume_Bunny-18.png', 'img/layers/hat/Flower_Wreath_Pink-70.png', 'img/layers/hat/Bucket_Hat_Blue-60.png', 'img/layers/hat/Party_Hat-27.png', 'img/layers/hat/Costume_Dino-6.png', 'img/layers/hat/Fisherman_Hat-43.png', 'img/layers/hat/Hat_Pink-91.png', 'img/layers/hat/Hat_Red-93.png', 'img/layers/hat/Stuntman_Helmet-45.png'];
var shirt_src = ['img/layers/shirt/Nurse-50.png', 'img/layers/shirt/T_Shirt_Green-90.png', 'img/layers/shirt/Stuntman-21.png', 'img/layers/shirt/Cape_Green-18.png', 'img/layers/shirt/Astro_Silver-6.png', 'img/layers/shirt/Dress_Green-64.png', 'img/layers/shirt/Gold_Chain-16.png', 'img/layers/shirt/Shirt_Tie_Blue-68.png', 'img/layers/shirt/Costume_Pirate-22.png', 'img/layers/shirt/Tank_Top_Black-95.png', 'img/layers/shirt/T_Shirt_Herman-13.png', 'img/layers/shirt/T_Shirt_Lollipop-75.png', 'img/layers/shirt/Puffer_Jacket_Rainbow-26.png', 'img/layers/shirt/Cape_Red-18.png', 'img/layers/shirt/Hoodie_Black-32.png', 'img/layers/shirt/Heart_Shirt_Pink-36.png', 'img/layers/shirt/Black_Spandex-17.png', 'img/layers/shirt/Combat_White-12.png', 'img/layers/shirt/Tattoo-40.png', 'img/layers/shirt/Dress_Yellow-65.png', 'img/layers/shirt/Tank_Top_Pink-95.png', 'img/layers/shirt/Hoodie_WGMI_Red-22.png', 'img/layers/shirt/Tank_Top_Purple-95.png', 'img/layers/shirt/T_Shirt_Recycle-46.png', 'img/layers/shirt/Costume_Skeleton-11.png', 'img/layers/shirt/Hoodie_Color_Camo-22.png', 'img/layers/shirt/Scarf_Green-44.png', 'img/layers/shirt/Tank_Top_Rainbow-85.png', 'img/layers/shirt/Shirt_Tie_Red-68.png', 'img/layers/shirt/T_Shirt_Red-90.png', 'img/layers/shirt/Costume_Duck_White-5.png', 'img/layers/shirt/T_Shirt_Blue-90.png', 'img/layers/shirt/Costume_Fireman-7.png', 'img/layers/shirt/Cat_White-9.png', 'img/layers/shirt/Suit_Demon-11.png', 'img/layers/shirt/T_Shirt_Doggo-46.png', 'img/layers/shirt/T_Shirt_Pink-90.png', 'img/layers/shirt/Astro_Dark-6.png', 'img/layers/shirt/Tank_Top_Bone_Club-50.png', 'img/layers/shirt/Dress_Wedding-58.png', 'img/layers/shirt/Sweater_Vest_Blue-52.png', 'img/layers/shirt/Biker_Jacket-21.png', 'img/layers/shirt/Sweater_Vest_Pink-53.png', 'img/layers/shirt/HODL_Black-30.png', 'img/layers/shirt/Hoodie_Blue-32.png', 'img/layers/shirt/Heart_Shirt_Red-36.png', 'img/layers/shirt/Suit_Purple-38.png', 'img/layers/shirt/Costume_Mummy-11.png', 'img/layers/shirt/T_Shirt_Cute_Plant-13.png', 'img/layers/shirt/Tank_Top_Red-95.png', 'img/layers/shirt/Puffer_Jacket_Blue-28.png', 'img/layers/shirt/Puffer_Jacket_Pink-28.png', 'img/layers/shirt/Hoodie_Green-32.png', 'img/layers/shirt/Froggy-9.png', 'img/layers/shirt/Dress_Pink-63.png', 'img/layers/shirt/Cute_Creature-9.png', 'img/layers/shirt/Flame_Black-8.png', 'img/layers/shirt/Combat_Black-12.png', 'img/layers/shirt/Artists_Apron-24.png', 'img/layers/shirt/Ninja_Rainbow-14.png', 'img/layers/shirt/Christmas_Sweater-34.png', 'img/layers/shirt/Kings_Robe-10.png', 'img/layers/shirt/Costume_Dino-3.png', 'img/layers/shirt/T_Shirt_Red_White-73.png', 'img/layers/shirt/HODL_Blue-30.png', 'img/layers/shirt/T_Shirt_Tie_Dye-70.png', 'img/layers/shirt/Farmers_Overalls-19.png', 'img/layers/shirt/Ninja_Blue-15.png', 'img/layers/shirt/Flame_Red-8.png', 'img/layers/shirt/Candy_Sweater-75.png', 'img/layers/shirt/Scarf_Red-44.png', 'img/layers/shirt/Costume_Duck_Yellow-4.png', 'img/layers/shirt/Astro_Orange-6.png', 'img/layers/shirt/Camo_Jacket-20.png', 'img/layers/shirt/Cat_Black-9.png', 'img/layers/shirt/Baseball_Jersey_Blue-60.png', 'img/layers/shirt/Fishermans_Vest-23.png', 'img/layers/shirt/Cheerleader-25.png', 'img/layers/shirt/Suit_Black-55.png', 'img/layers/shirt/Baseball_Jersey_Red-60.png'];
var type_src = ['img/layers/Type/Chromie.png', 'img/layers/Type/Tetris.png', 'img/layers/Type/Angel.png', 'img/layers/Type/Doggo_Living_Room.png', 'img/layers/Type/Alien.png', 'img/layers/Type/Demon.png'];

var attributes = [background_src, fur_src, shirt_src, face_src, hat_src]
// var attributes = [hat_src, face_src, shirt_src, fur_src, background_src]
var current_avatar_attributes = [0, 0, 0, 0, 0];
var attribute_count = 5;
var current_attribute = 0;
var current_option = 0;
var current_button = 0;

// bg.src = "layers/Background/blue-10.png"
function drawGame(){
  drawAvatar();
  //drawAttributeCategory();
  changeAttributeCategory(1,0);
  drawAttributeOptions();
}
function drawAvatar() {
  // Make new canvas for avatar
  var can = document.getElementById("canvas1");
  var ctx = can.getContext("2d");
  
  // Calculate & set the dimension of the canvas
  var canSize = window.innerHeight*.6;
  if(window.innerHeight*.6 > window.innerWidth){
      canSize = window.innerWidth;
  }
  canSize = canSize*.75
  
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


function drawAttributeOptions(){
  // remove all slides
  $('.options_slick').slick('removeSlide', null, null, true);
  // $('.options_slick').slick('destroy');
  //add slides for current attribute
  // slickOptions();

  for(var i=0; i<attributes[current_attribute].length; i++){
    $('.options_slick').slick('slickAdd','<div><img src=' + attributes[current_attribute][i] + ' onclick="changeAttributeOption(' + i + ')"></h3></div>');
  }

  // trying to lazy load the images when the category changes
  const images = document.getElementById("options_div").getElementsByTagName("img");
  for (let image of images) {
    image.addEventListener("load", fadeImg);
    image.style.opacity = "0";
  }
  console.log(images);
  function fadeImg () {
    this.style.transition = "opacity 2s";
    this.style.opacity = "1";
  }
  console.log("load hair");
}

function changeAttributeCategory(attr, butn){
  // change old button to normal color
  buttons = document.getElementsByClassName("category_slick")[0].getElementsByTagName("button");
  buttons[current_button].classList.remove('active');

  //change pressed button to new color
  buttons[butn].classList.add('active');

  //update current vars
  current_attribute = attr;
  current_button = butn;

  //load the attributes for the new category
  drawAttributeOptions();
}

function changeAttributeOption(option){
  current_option = option;
  current_avatar_attributes[current_attribute] = option;
  drawAvatar();
}

// jquery stuff

function slickOptions(){
  $(document).ready(function(){
    $('.options_slick').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      centerMode: true
    });
  });
}
$(document).ready(function(){
  $('.options_slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // lazyLoad: 'progressive',
    // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    centerMode: true
  });
});

// $(document).ready(function(){
//   $('.category_slick').slick({
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     variableWidth: true,
//     // variableHeight:true
//     prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//   });
// });

