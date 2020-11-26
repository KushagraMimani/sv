class Mat{
    constructor(){
        this.whatisadd = createElement('h3');

        this.be = createElement('p');
        this.be1 = createElement('p');
        this.be2 = createElement('p');
        this.be3 = createElement('p');
        this.be4 = createElement('p');
        this.be5 = createElement('p');
        this.be6 = createElement('h3');
        this.be7 = createElement('p');
        this.be8 = createElement('p');
        this.be9 = createElement('p');

        this.be10 = createElement('p');
        this.be11 = createElement('p');
        this.be12 = createElement('p');

        this.be13 = createElement('p');
        this.be14 = createElement('p');
        this.be15 = createElement('p');

        this.speak = createButton('Read Aloud');

        this.Back = createButton('Back');
    }

    display(){

        this.speak.style('width','80px');
        this.speak.style('height','30px');
        this.speak.style('background','lightPink');
        this.speak.position(displayWidth/2-170,displayHeight/2+160);
        this.speak.mousePressed(()=>{
            var sp = new p5.Speech(); // speech synthesis object
            sp.speak('What Is Addition? Addition means altogether, counting of two groups of objects and finding how many in all. Example: 5 + 11 = 16 is addition... Addend... Sum or Total'); // say something
        })

        this.whatisadd.html('What Is Addition?')
        this.whatisadd.position(displayWidth/2-90,displayHeight/2-200)

        this.be.html('Addition means altogether, counting of two groups of objects and finding how many in all.');
        this.be.position(displayWidth/2-170,displayHeight/2-150);

        this.be1.html('Example: 5 + 11 = 16 is addition');
        this.be1.position(displayWidth/2-170,displayHeight/2-100)

        this.be2.html('↑');
        this.be2.position(displayWidth/2-105,displayHeight/2-80);

        this.be3.html('↑');
        this.be3.position(displayWidth/2-75,displayHeight/2-80);

        this.be4.html('Addend');
        this.be4.position(displayWidth/2-110,displayHeight/2-60)
        
        this.be5.html('↑_ Sum or Total');
        this.be5.position(displayWidth/2-40,displayHeight/2-80);

        this.be6.html('TRY THESE YOURSELVES');
        this.be6.position(displayWidth/2-110,displayHeight/2);

        this.be7.html('5 + 3 = ?');
        this.be7.position(displayWidth/2-100,displayHeight/2+30);

        this.be8.html('8 + 5 = ?');
        this.be8.position(displayWidth/2-100,displayHeight/2+60);

        this.be9.html('4 + 7 = ?');
        this.be9.position(displayWidth/2-100,displayHeight/2+90)

        this.be10.html('6 + 1 = ?');
        this.be10.position(displayWidth/2-100,displayHeight/2+120);

        this.be11.html('3 + 4 = 6 (✔️ or ✘)');
        this.be11.position(displayWidth/2-100,displayHeight/2+150);

        this.Back.style('width','80px');
        this.Back.style('height','30px');
        this.Back.style('background','lightPink');
        this.Back.position(displayWidth/2-170,displayHeight/2-305);
        this.Back.mousePressed(()=>{
            gameState = 0;

            this.speak.hide();
            
            this.whatisadd.hide();

            this.be.hide();
            this.be1.hide();
            this.be2.hide();
            this.be3.hide();
            this.be4.hide();
            this.be5.hide();
            this.be6.hide();
            this.be7.hide();
            this.be8.hide();
            this.be9.hide();
            this.be10.hide();
            this.be11.hide();
            
            this.Back.hide();
        });
    }
}