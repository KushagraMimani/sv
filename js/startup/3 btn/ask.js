class Ask{
    constructor(){
        this.title = createElement('h2');
        this.back = createButton('Back');
        this.input = createInput('Message');
        this.submit = createButton('SUBMIT');
        this.alert;
    }

    display(){
        this.title.html('Directly Ask The Owner');
        this.title.position(displayWidth/2-110,displayHeight/2-200);

        this.submit.style('width','100px');
        this.submit.style('height','100px');
        this.submit.style('background','#fff5be');
        this.submit.position(displayWidth/2-50, displayHeight/2+100);

        this.back.style('width','80px');
        this.back.style('height','30px');
        this.back.style('background','lightPink');
        this.back.position(displayWidth/2-170,displayHeight/2-305);

        this.input.position(displayWidth/2-100,displayHeight/2-100);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.back.mousePressed(()=>{

            gameState = 0;
            
            this.back.hide();
            this.title.hide();
            this.input.hide();
            this.submit.hide();
            this.alert.hide();
        });

        this.submit.mousePressed(()=>{
            this.input.hide();
            this.submit.hide();
            this.title.hide();

            this.alert = createElement('h2');
            this.alert.html('Message successfully Submited');
            this.alert.position(displayWidth/2-150,displayHeight/2-100)
            this.alert.style('font-size', '60px')
        });
    }
}