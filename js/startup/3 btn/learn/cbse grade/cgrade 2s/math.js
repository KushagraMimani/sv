class Mat1{
    constructor(){
        this.Back = createButton('Back');
        this.speak = createButton('Read Aloud');
    }
        
    display(){
        gameState = 20;

        this.speak.style('width','80px');
        this.speak.style('height','30px');
        this.speak.style('background','lightPink');
        this.speak.position(displayWidth/2-170,displayHeight/2+160);
        this.speak.mousePressed(()=>{
            var sp = new p5.Speech(); // speech synthesis object
            sp.speak('What Is Division? Division is a method of distributing a group of things into  equal parts. It is one of the four basic operations of arithmetic, which gives a fair result of sharing. The division is an of muultiplicattion. If 3 groups of 4 maee 12 in mulplication; 12 is divided into 3 equal group 4 in each group in diivision.the main goal of the division is to see how ny equal groups or how many in each group when sharing fairly. For example: There are 16 balls and 4 boxes, how to put 16 balls into four equal sized boxes? so,16 divided by 4 = ? four'); // say something
        })
        
        this.Back.style('width','80px');
        this.Back.style('height','30px');
        this.Back.style('background','lightPink');
        this.Back.position(displayWidth/2-170,displayHeight/2+200);

        this.Back.mousePressed(()=>{
            gameState = 0;
            this.Back.hide();
            this.speak.hide();
        });
    }
}