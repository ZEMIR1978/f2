//Declaramos la variable del mariachi junto con su variable para precargar su imagen
var mariachi,mariachiImg;
//Declaramos la variable del esqueleto junto con su variable para precargar su imagen
var skeleton,skeletonImg;
//Declaromos la variable del piso
var gameState = "serve" ;
var floor,floorImg;
var bg;




//Creamos la funcion precargar
function preload(){
  //Precargamos la Img del mariachi
  mariachiImg = loadImage("Mariachi.png");
  //Precargamos la Img del mariachi
  skeletonImg = loadImage("esqueleto.png");
//precargamos el fondo
  bg = loadImage("Fondo.jpg")

  floorImg = loadImage("Piso.png")

}
  
//creamos la funcion setup
function setup() {
 
  //CReamos el canvas del juego
  createCanvas(800,400);
  
  
  //Creamos un sprite para el mariachi
  mariachi = createSprite(30, 395, 50, 50);
  mariachi.addImage("mariachi", mariachiImg)
  mariachi.scale = 0.05
  //creamos sprite para el esqueleto
  skeleton = createSprite(600,385,50,50)
  skeleton.addImage("esqueleto", skeletonImg)
  skeleton.scale = 0.3
  //creamos el piso como sprite
  floor = createSprite(width/2,height,width,1)
  floor.visible = false
  //floor.addImage("piso", floorImg)
 





  


}


//Creamos la funcion dibujar
function draw() {
  //Establecemos el fondo del juego
  background(0); 
  image(bg,0,0,width,height);

  //Dibujamos los sprites
  drawSprites()
  mariachi.collide(floor)
  skeleton.collide(floor)
  




  //Movimiento del mariachi
  if(keyDown("left_arrow")){
    mariachi.x = mariachi.x - 3;
  }

  if(keyDown("right_arrow")){
    mariachi.x = mariachi.x + 3;
    mariachi.changeImage()
  }

  if(keyDown("space")){
    mariachi.velocityY = -5;

  }

  //Graavedad del mariachi
  mariachi.velocityY += 0.8;
}