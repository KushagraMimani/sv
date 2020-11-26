class Select{
    constructor(){
        this.learn = createButton('LEARN');
        this.ask = createButton('ASK');
        this.solve = createButton('SOLVE');
        this.title = createElement('h2');
        this.hret = createButton('Back');
    }

    display(){
        this.learn.style('width','100px');
        this.learn.style('height','100px');
        this.learn.style('background','lightPink');
        this.learn.position(displayWidth/2-150, displayHeight/2-50);

        this.ask.style('width','100px');
        this.ask.style('height','100px');
        this.ask.style('background','lightPink');
        this.ask.position(displayWidth/2+50, displayHeight/2-50);

        this.solve.style('width','100px');
        this.solve.style('height','100px');
        this.solve.style('background','lightPink');
        this.solve.position(displayWidth/2-50, displayHeight/2+100);

        this.hret.style('width','80px');
        this.hret.style('height','30px');
        this.hret.style('background','lightPink');
        this.hret.position(displayWidth/2-170,displayHeight/2-305);

        this.hret.mousePressed(()=>{

            gameState = 0;

            this.hret.hide();
            this.learn.hide();
            this.ask.hide();
            this.solve.hide();
            this.title.hide();
        });

        this.title.html('What Do You Want To Choose?');
        this.title.position(displayWidth/2-160,displayHeight/2-200);
        this.title.style('font-style','none');

        this.learn.mousePressed(()=>{
            learn1 = new Learn();
            learn1.display();

            this.learn.hide();
            this.ask.hide();
            this.solve.hide();
            this.title.hide();
            this.hret.hide();

        });

        this.ask.mousePressed(()=>{
            this.learn.hide();
            this.ask.hide();
            this.solve.hide();
            this.title.hide();
            this.hret.hide();
            
            ask1 = new Ask();
            ask1.display();

        });

        this.solve.mousePressed(()=>{
            solve1 = new Solve();
            solve1.display();

            this.learn.hide();
            this.ask.hide();
            this.solve.hide();
            this.title.hide();
            this.hret.hide();

        });
    }
}