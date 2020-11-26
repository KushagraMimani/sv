class Eng{
    constructor(){
        this.whatisen = createElement('h3');
        this.briefexp = createElement('p');
        this.briefexp2 = createElement('p');
        this.briefexp3 = createElement('p');
        this.briefexp4 = createElement('p');
        this.briefexp5 = createElement('p');
        this.briefexp6 = createElement('p');
        this.briefexp7 = createElement('p');
        this.briefexp8 = createElement('p');
        this.briefexp9 = createElement('p');
        this.briefexp10 = createElement('p');
        this.briefexp11 = createElement('p');
        this.speak = createButton('Read Aloud')
        this.Back = createButton('Back');
    }

    display(){

        this.speak.style('width','80px');
        this.speak.style('height','30px');
        this.speak.style('background','lightPink');
        this.speak.position(displayWidth/2-80,displayHeight/2-305);
        this.speak.mousePressed(()=>{
            var sp = new p5.Speech(); // speech synthesis object
            sp.speak('What Are Sentences? A sentence is a group of words that tells a whole story.Here`s a sentence : Annie is funny.Every sentence starts with a capital letter. Do you see how we started the sentence with "Annie" and not "annie"?The order of words in a sentence matters. The order has to make sense. Does this sentence make sense? Kathy won a teddy bear at the carnival.Yes! How about this one? carnival the won Kathy at a teddy bear.Nope, that sentence makes no sense.So we see that word order matters!'); // say something
        })

        this.whatisen.html('What Are Sentences?');
        this.whatisen.position(displayWidth/2-90,displayHeight/2-200)

        this.briefexp.html('A sentence is a group of words that tells a whole story.' );
        this.briefexp.position(displayWidth/2-150,displayHeight/2-170);

        this.briefexp2.html('Here`s a sentence : Annie is funny.');
        this.briefexp2.position(displayWidth/2-150,displayHeight/2-130);

        this.briefexp3.html('Every sentence starts with a capital letter. Do you see how we started the sentence with "Annie" and not "annie"?');
        this.briefexp3.position(displayWidth/2-150,displayHeight/2-100);

        this.briefexp4.html('The order of words in a sentence matters. The order has to make sense.');
        this.briefexp4.position(displayWidth/2-150,displayHeight/2-45);

        this.briefexp5.html('Does this sentence make sense? ↓↓');
        this.briefexp5.position(displayWidth/2-150,displayHeight/2);

        this.briefexp6.html('Kathy won a teddy bear at the carnival.');
        this.briefexp6.position(displayWidth/2-150,displayHeight/2+25);

        this.briefexp7.html('Yes!')
        this.briefexp7.position(displayWidth/2-150,displayHeight/2+45);

        this.briefexp8.html('How about this one? ↓↓')
        this.briefexp8.position(displayWidth/2-150,displayHeight/2+80);

        this.briefexp9.html('carnival the won Kathy at a teddy bear.');
        this.briefexp9.position(displayWidth/2-150,displayHeight/2+110);

        this.briefexp10.html('Nope, that sentence makes no sense.');
        this.briefexp10.position(displayWidth/2-150,displayHeight/2+145);
         
        this.briefexp11.html('So we see that word order matters!');
        this.briefexp11.position(displayWidth/2-150,displayHeight/2+180);

        this.Back.style('width','80px');
        this.Back.style('height','30px');
        this.Back.style('background','lightPink');
        this.Back.position(displayWidth/2-170,displayHeight/2-305);

        this.Back.mousePressed(()=>{
            gameState = 0;

            this.speak.hide();
            
            this.whatisen.hide();

            this.briefexp.hide();
            this.briefexp2.hide();
            this.briefexp3.hide();
            this.briefexp4.hide();
            this.briefexp5.hide();
            this.briefexp6.hide();
            this.briefexp7.hide();
            this.briefexp8.hide();
            this.briefexp9.hide();
            this.briefexp10.hide();
            this.briefexp11.hide();
            
            this.Back.hide();
        });
    }
}