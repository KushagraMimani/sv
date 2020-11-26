class Learn{
    constructor(){
        // this.icse1 = createButton('ICSE');
        this.cbse1 = createButton('CBSE');
        this.back = createButton('Back');
    }

    display(){

        this.cbse1.style('width','100px');
        this.cbse1.style('height','100px');
        this.cbse1.style('background','lightPink');
        this.cbse1.position(displayWidth/2-50, displayHeight/2-50);

        this.back.style('width','80px');
        this.back.style('height','30px');
        this.back.style('background','lightPink');
        this.back.position(displayWidth/2-170,displayHeight/2-305);

        this.back.mousePressed(()=>{
            this.back.hide();

            this.cbse1.hide();

            gameState = 0;
        });

        this.cbse1.mousePressed(()=>{
            this.cbse1.hide();
            this.back.hide();

            cbse = new Cbse();
            cbse.display();
        });

        
    }
}