class Eng1{
    constructor(){
        this.Back = createButton('Back');
        this.speak = createButton('Read Aloud');
    }

    display(){

        this.speak.style('width','80px');
        this.speak.style('height','30px');
        this.speak.style('background','lightPink');
        this.speak.position(displayWidth/2-170,displayHeight/2+160);
        this.speak.mousePressed(()=>{
            var sp = new p5.Speech(); // speech synthesis object
            sp.speak(''); // say something
        })

        this.Back.style('width','80px');
        this.Back.style('height','30px');
        this.Back.style('background','lightPink');
        this.Back.position(displayWidth/2-170,displayHeight/2);

        this.Back.mousePressed(()=>{
            gameState = 0;
            this.Back.hide();
        });
        gameState = 21;
    }
}