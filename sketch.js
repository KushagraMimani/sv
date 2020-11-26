var home,start,help1,ask1,solve1,learn1,select;

var cbse,icse,igrade1,igrade2,grade1,grade2;

var canvas;

var main;

var logoHI,bt1I,btn2I,btn3I,helpI,matI,engI;

var voiceI;

var gameState = 0;

function preload(){
    logoHI = loadImage("logo/logo 1 fin.png");
    helpI = loadImage("img/help.png");
    matI = loadImage("img/mat1.png");
    engI = loadImage("img/eng1.png");
}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);

    main = new Main();
}

function draw(){
    if(gameState === 0){
        background(logoHI);
    }else if(gameState === 1) {
        background("lightGreen");
    }else if(gameState === 2){
        background(helpI);
    }else if(gameState === 20){
        background(matI);
    }else if(gameState === 21){
        background(engI);
    }
    
    main.display();
}