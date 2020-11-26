class Cbse{
    constructor(){
        this.back = createButton('Back');
        this.g1 = createButton('Class 1');
        this.g2 = createButton('Class 2');
    }

    display(){
        this.back.style('width','80px');
        this.back.style('height','30px');
        this.back.style('background','lightPink');
        this.back.position(displayWidth/2-170,displayHeight/2-305);

        this.g1.position(displayWidth/2-100,displayHeight/2-100);
        this.g1.style('width','200px');
        this.g1.style('height','50px');
        this.g1.style('background','#ffd1df')

        this.g2.position(displayWidth/2-100,displayHeight/2);
        this.g2.style('width','200px');
        this.g2.style('height','50px');
        this.g2.style('background','#ffd1df')

        this.back.mousePressed(()=>{
            gameState = 0;
            this.back.hide();
            this.g1.hide();
            this.g2.hide();
        }); 

        this.g1.mousePressed(()=>{
            this.back.hide();
            this.g1.hide();
            this.g2.hide();
            
            grade1 = new Grade1();
            grade1.display();
        });

        this.g2.mousePressed(()=>{
            this.back.hide();
            this.g1.hide();
            this.g2.hide();
            
            grade2 = new Grade2();
            grade2.display();
        });
    }
}
