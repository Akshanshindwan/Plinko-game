const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var ground;

var division0, division1,
    division2,division3,
    division4,division5,
    division6,division7,
    division8;

var plinko0, plinko1, 
    plinko2, plinko3, 
    plinko4, plinko5,
    plinko6, plinko7,
    plinko8, 

      plinko9, plinko10, 
      plinko11,plinko12, 
      plinko13,plinko14,
      plinko15,plinko16;

    plinko17, plinko18, 
    plinko19, plinko20, 
    plinko21, plinko22,
    plinko23, plinko24,
    plinko25, 
  
      plinko26, plinko27, 
      plinko28,plinko29, 
      plinko30,plinko31,
      plinko32,plinko33;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  
 ground = new Ground(240,790,480,20);

 division0 = new Divisions(0,650,5,300);
 division1 = new Divisions(60,650,5,300);
 division2 = new Divisions(120,650,5,300);
 division3 = new Divisions(180,650,5,300);
 division4 = new Divisions(240,650,5,300);
 division5 = new Divisions(300,650,5,300);
 division6 = new Divisions(360,650,5,300);
 division7 = new Divisions(420,650,5,300);
 division8 = new Divisions(478,650,5,300);

    plinko0 = new Plinko(6, 360, 6);
    plinko1 = new Plinko(60, 360, 6);
    plinko2 = new Plinko(180, 360, 6);
    plinko3 = new Plinko(120, 360, 6);
    plinko4 = new Plinko(240, 360, 6);
    plinko5 = new Plinko(300, 360, 6);
    plinko6 = new Plinko(360, 360, 6);
    plinko7 = new Plinko(420, 360, 6);
    plinko8 = new Plinko(475, 360, 6);

        plinko9 = new Plinko(36, 270, 6);
        plinko10 = new Plinko(90, 270, 6);
        plinko11 = new Plinko(209, 270, 6);
        plinko12 = new Plinko(146, 270, 6);
        plinko13 = new Plinko(269, 270, 6);
        plinko14 = new Plinko(329, 270, 6);
        plinko15 = new Plinko(390, 270, 6);
        plinko16 = new Plinko(449, 270, 6);

            plinko17 = new Plinko(6, 180, 6);
            plinko18 = new Plinko(60, 180, 6);
            plinko19 = new Plinko(180, 180, 6);
            plinko20 = new Plinko(120, 180, 6);
            plinko21 = new Plinko(240, 180, 6);
            plinko22 = new Plinko(300, 180, 6);
            plinko23 = new Plinko(360, 180, 6);
            plinko24 = new Plinko(420, 180, 6);
            plinko25 = new Plinko(475, 180, 6);

                plinko26 = new Plinko(36, 80, 6);
                plinko27 = new Plinko(90, 80, 6);
                plinko28 = new Plinko(209, 80, 6);
                plinko29 = new Plinko(146, 80, 6);
                plinko30 = new Plinko(269, 80, 6);
                plinko31 = new Plinko(329, 80, 6);
                plinko32 = new Plinko(390, 80, 6);
                plinko33 = new Plinko(449, 80, 6);
               
}

function draw() {
  background("black");  

  textSize(20)
  text(mouseX + ',' + mouseY, 30, 45);

  ground.display();
  division0.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

    plinko0.display();
    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
    plinko7.display();
    plinko8.display();

      plinko9.display();
      plinko10.display();
      plinko11.display();
      plinko12.display();
      plinko13.display();
      plinko14.display();
      plinko15.display();
      plinko16.display();

    plinko17.display();
    plinko18.display();
    plinko19.display();
    plinko20.display();
    plinko21.display();
    plinko22.display();
    plinko23.display();
    plinko24.display();
    plinko25.display();

      plinko26.display();
      plinko27.display();
      plinko28.display();
      plinko29.display();
      plinko30.display();
      plinko31.display();
      plinko32.display();
      plinko33.display();    
      

  


  drawSprites();
}