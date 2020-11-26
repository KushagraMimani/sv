class Solve{
    constructor(){
        this.cs = createElement('h1');
        this.hret2 = createButton('Back');
        this.src = createButton('Connnect 4');
    }

    display(){
        this.cs.html('COMING SOON');
        this.cs.position(displayWidth/2-110,displayHeight/2);

        this.hret2.style('width','80px');
        this.hret2.style('height','30px');
        this.hret2.style('background','lightPink');
        this.hret2.position(displayWidth/2-170,displayHeight/2-305);     

        this.hret2.mousePressed(()=>{
            this.hret2.hide();
            this.cs.hide();

            gameState = 0;
        });
    }
}