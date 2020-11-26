class Help{
    constructor(){
        this.welcome = createElement('h1');
        this.para = createElement('p');
        this.hret1 = createButton('Back');
    }

    display(){
        // this.welcome.html('WELCOME');
        // this.welcome.position(displayWidth/2-90,displayHeight/2-250);

        // this.para.html('Hi, this app is all about learning so i hope you like it ☺. So first of all you click on start. and you choose what you want to do, LEARN ASK SOLVE. In LEARN there will be grades given on the screen and you have to choose it, after that you can select the form of your education and select your chapter and start learning. If you select ASK you can ask any question you have a doubt in. And SOLVE is coming Soon there you will get a lot of games to play. If you like my app please rate it a 5 star ☺');
        // this.para.position(displayWidth/2-170,displayHeight/2-200)
        // this.para.style('font-size','25px')

        this.hret1.style('width','80px');
        this.hret1.style('height','30px');
        this.hret1.style('background','lightPink');
        this.hret1.position(displayWidth/2-170,displayHeight/2-305);

        this.hret1.mousePressed(()=>{
            this.welcome.hide();
            this.para.hide();
            this.hret1.hide();

            gameState = 0;
        });

    }
}