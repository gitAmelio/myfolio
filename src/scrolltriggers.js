var animateHTML = function() {
    var elems,
        windowHeight
    
    var init = function() {
      elems = document.getElementsByClassName("hidden");
      windowHeight = window.innerHeight;
      _addEventHandlers();
    }
    
    var _addEventHandlers = function() {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    var _checkPosition = function() {
      for ( var i = 0; i < elems.length; i++ ) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= 0) { 
          elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
        }
      }    
    }
    
    return {
      init: init
    }
  }
  
  animateHTML().init();
  /* function getElemsHeight() {
      elemsHeight = [];
      for ( var i = 0; i < elems.length; i++ ) {
      elemsHeight.push(elems[i].getBoundingClientRect().top - windowHeight)
    }
  }
  getElemsHeight();
  
  window.onscroll = function() {
    for ( var j = 0; j < elems.length; j++ ) {
      //console.log("offset " + window.pageYOffset + " elemsHeight " + elemsHeight[j])
      if ( window.pageYOffset > elems[j].getBoundingClientRect().top ) {
        
         elems[j].className = elems[j].className.replace( "hidden", "fade-in" );
         getElemsHeight();
        
      }
    }
  }; */
  
/*
.hidden {
  opacity: 0;
}

.fade-in {
  animation: fade-in 1.4s;
}

@keyframes fade-in {
    from {opacity: 0; transform: scale(.7,.7)}
    to {opacity: 1;}
}

.bounce {
  animation: bounce 1s infinite;
  position: relative;
}

@keyframes bounce {
  0% {top: -2px}
  50% {top: 2px}
  100% { top: -2px}
}






// Variables
//
$primary-color: #013750;
$secondary-color: #F23E02;

$font-color: #fff;
$font-color-inverse: #01010B;

$container-width: 1200px;
$grid-breakpoint: 800px;
$grid-margin: 1%;
$grid-number: 12;

body,
html {
  height: 100%;
  color: $font-color;
  font: 30px sans-serif;
}

a {
  color: $font-color;
  text-decoration: none;
  
  &:hover {
    color: $secondary-color;
  }
}



// Full screen
//

.full-screen {
  height: 100%;
  width: 100%;
  position: relative;
}

.center {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);  
}

.center__inner {
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
}

// colors

.background-primary {
  background: $primary-color;
}

.background-secondary {
  background: $secondary-color;
}

.color-primary {
  color: $primary-color;
}
*/  

/*
.full-screen.background-primary
  .center
    .center__inner
      h1.fade-in animate on scroll with vanilla JS
      a(href="#2")
        .fa.fa-caret-down.fa-3x.fade-in.bounce
.full-screen.background-secondary#2
  .center
    .center__inner#fade-in-container
      h2.hidden and CSS
.full-screen#3
  .center
    .center__inner
      h2.color-primary.hidden Want to know how?    
.full-screen#3.background-primary
  .center
    .center__inner
        a(href="https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js" target="newwindow")      
          h2.hidden Click here for a tutorial
*/

// ----------------------------------
/*
// click event listener
$('body').on('click', function(e) {
  explode(e.pageX, e.pageY);
})

// explosion construction
function explode(x, y) {
  var particles = 15,
    // explosion container and its reference to be able to delete it on animation end
    explosion = $('<div class="explosion"></div>');

  // put the explosion container into the body to be able to get it's size
  $('body').append(explosion);

  // position the container to be centered on click
  explosion.css('left', x - explosion.width() / 2);
  explosion.css('top', y - explosion.height() / 2);

  for (var i = 0; i < particles; i++) {
    // positioning x,y of the particle on the circle (little randomized radius)
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
      color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), // randomize the color rgb
        // particle element creation (could be anything other than div)
      elm = $('<div class="particle" style="' +
        'background-color: rgb(' + color + ') ;' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px"></div>');

    if (i == 0) { // no need to add the listener on all generated elements
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        explosion.remove(); // remove this explosion container when animation ended
      });
    }
    explosion.append(elm);
  }
}

// get random number between min and max value
function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}

---------------------------------------------------------------------------

// explosion container
.explosion {
  position: absolute; // required if positioned on click else 'relative'
  width: 600px;
  height: 600px;
  pointer-events: none; // make it clickable trhough
  // particle styling
  .particle {
    position: absolute; // required  
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pop 1s reverse forwards; // required
  }
}

// animation for particle fly away from the cursor
@keyframes pop {
  from {
    opacity: 0;
  }
  to {
    top: 50%;
    left: 50%;
    opacity: 1;
  }
}

/// DEMO styling
html, body {
  height: 100%;
  background: #000;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  color: #CCC;
  font-family: "Helvetica", "Arial", sans-serif;
  user-select: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -moz-user-select: none;      /* Firefox */
  cursor: default;
}

<html>
  <head>
  </head>
  <body>
    <h1>click anywhere</h1>
  </body>
</html>


*/



// -----------------------------------------------------------------------
var canvas;
var stage;
var imgSeq = new Image();       // The image for the sparkle animation
var sprite;                     // The animated sparkle template to clone
var fpsLabel;
var fader;                      // Semi fades the Background to give a tracing effect
var spkls;                      // Container for all the sparkles
function init() {
  // create a new stage and point it at our canvas:
  canvas = document.getElementById("testCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stage = new createjs.StageGL(canvas, {preserveBuffer:true, antialias:true});
  stage.autoClear = false;
  stage.setClearColor(0x000000);
  
  // attach mouse handlers directly to the source canvas.
  // better than calling from canvas tag for cross browser compatibility:
  stage.addEventListener("stagemousemove", moveCanvas);
  stage.addEventListener("stagemousedown", clickCanvas);
  
  var img = new Image();
  img.crossOrigin="Anonymous";
  img.onload = imageLoaded;
  img.src = "https://lab.gskinner.com/codepen/_assets/art/spritesheet_sparkle.png";
}

function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  fader.graphics.clear().beginFill("rgba(0,0,0, 0.3)").drawRect(0,0, canvas.width, canvas.height).endFill();
  fader.cache(0,0, canvas.width,canvas.height, 1/32);
  stage.updateViewport(canvas.width, canvas.height);
  stage.update();
}

function imageLoaded() {
  
  // define simple sprite sheet data specifying the image(s) to use, the size of the frames,
  // and the registration point of the frame
  // it will auto-calculate the number of frames from the image dimensions and loop them
  var data = {
    images: [this], //'this' is a reference to the loaded image. Image loaded crossOrigin will throw security errors. For more information on Cross Origin Issues: https://www.createjs.com/docs/easeljs/classes/SpriteSheet.html 
    frames: {
      width: 21,
      height: 23,
      regX: 10,
      regY: 11
    }
  };
  // set up an animation instance, which we will clone
  sprite = new createjs.Sprite(new createjs.SpriteSheet(data));
  // setup slow fadeout
  fader = new createjs.Shape();
  stage.addChild(fader);
  var gfx = fader.graphics;
  gfx.beginFill("rgba(0,0,0, 0.3)").drawRect(0,0, 1024, 704).endFill();
  fader.cache(0,0, 1024,1024, 1/32); // Power of two textures smooth better, but we don't need full resolution either
  spkls = new createjs.Container();
  stage.addChild(spkls);
  // add a text object to output the current FPS:
  /*fpsLabel = new createjs.Text("------ @ -- fps", "bold 14px Arial", "#FFF");
  stage.addChild(fpsLabel);
  fpsLabel.x = 10;
  fpsLabel.y = 20;
  fpsLabel.cache(0, 0, 128, 16);*/
  // start the tick and point it at the window so we can do some work before updating the stage:
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick", tick);
   
  handleResize();
  window.addEventListener("resize", handleResize);
}
function tick(event) {
  // loop through all of the active sparkles on stage:
  var l = spkls.numChildren;
  var m = event.delta / 16;
  for (var i = 0; i < l; i++) {
    var sparkle = spkls.getChildAt(i);
    if(--sparkle.life <= 0) {
      spkls.removeChild(sparkle);
      i--; l--;
      continue;
    }
    // apply gravity and friction
    sparkle.vY += 0.1 * m;
    // update position, scale, and alpha:
    sparkle.x += sparkle.vX * m;
    sparkle.y += sparkle.vY * m;
    sparkle.alpha = sparkle.alphaStart * (sparkle.life / sparkle.lifeMax);
    // remove sparkles that are off screen or not invisible
    if (sparkle.y > canvas.height) {
      sparkle.vY *= -(Math.random() * 0.1 + 0.8);
      sparkle.vX += Math.cos( Math.random() * Math.PI * 2) * 3;
    } else if (sparkle.y < 0) {
      sparkle.vY *= 0.9;
    }
    if (sparkle.x > canvas.width || sparkle.x < 0) {
      sparkle.vX *= -1;
    }
  }
  /*fpsLabel.text = l + " @ " + Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
  fpsLabel.updateCache();*/
  // draw the updates to stage
  stage.update(event);
}
// sparkle explosion
function clickCanvas(evt) {
  addSparkles(Math.random() * 500 + 200 | 0, stage.mouseX, stage.mouseY, 1);
}
// sparkle trail
function moveCanvas(evt) {
  addSparkles((Math.random() * 6 + 3) | 0, stage.mouseX, stage.mouseY, 0.1);
}
function addSparkles(count, x, y, speed) {
  // create the specified number of sparkles
  for (var i = 0; i < count; i++) {
    // clone the original sparkle, so we don't need to set shared properties:
    var sparkle = sprite.clone();
    // set display properties:
    sparkle.x = x;
    sparkle.y = y;
    sparkle.rotation = Math.random()*360;
    sparkle.alpha = sparkle.alphaStart = Math.random() * 0.7 + 0.6;
    sparkle.scale = Math.random() + 0.3;
    sparkle.life = sparkle.lifeMax = Math.random() * 100 + 50;
    // set up velocities:
    var a = Math.PI * 2 * Math.random();
    var v = (Math.random() - 0.5) * 30 * speed;
    sparkle.vX = Math.cos(a) * v;
    sparkle.vY = Math.sin(a) * v;
    // start the animation on a random frame:
    sparkle.gotoAndPlay(Math.random() * sparkle.spriteSheet.getNumFrames() | 0);
    // add to the display list:
    spkls.addChild(sparkle);
  }
}

init();

<div>
  <canvas id="testCanvas" width="550" height="500"></canvas>
</div>
<a href="https://createjs.com/" target="_blank"><img id="logo" src="https://createjs.com/mediakit/createjs-badge-reverse.png"></a>


<div id="badges">
  <div class="badge follow white"></div>
  <div class="badge click white"></div>
</div>
// -----------------------------------------------------------------------