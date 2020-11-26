class Grade2{
    constructor(){
        this.eng = createButton('English');
        this.mat = createButton('Maths');
        this.sci = createButton('Science');
        this.sst = createButton('SST');
        this.hin = createButton('Hindi');

        this.Back = createButton('Back');
    }

    display(){
        this.eng.position(displayWidth/2-100,displayHeight/2-200);
        this.eng.style('width','200px');
        this.eng.style('height','50px');
        this.eng.style('background','#ffd1df')

        this.mat.position(displayWidth/2-100,displayHeight/2-100);
        this.mat.style('width','200px');
        this.mat.style('height','50px');
        this.mat.style('background','#ffd1df')

        //UPDATE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // this.sci.position(displayWidth/2-100,displayHeight/2);
        // this.sci.style('width','200px');
        // this.sci.style('height','50px');
        // this.sci.style('background','#ffd1df')

        // this.sst.position(displayWidth/2-100,displayHeight/2+100);
        // this.sst.style('width','200px');
        // this.sst.style('height','50px');
        // this.sst.style('background','#ffd1df')

        // this.hin.position(displayWidth/2-100,displayHeight/2+200);
        // this.hin.style('width','200px');
        // this.hin.style('height','50px');
        // this.hin.style('background','#ffd1df')
        //UPDATE OVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        this.Back.style('width','80px');
        this.Back.style('height','30px');
        this.Back.style('background','lightPink');
        this.Back.position(displayWidth/2-170,displayHeight/2-305);

        this.Back.mousePressed(()=>{
            gameState = 0;
            this.Back.hide();
            this.eng.hide();
            this.sst.hide();
            this.mat.hide();
            this.sci.hide();
            this.hin.hide();
            
        });

        this.eng.mousePressed(()=>{
            this.Back.hide();
            this.eng.hide();
            this.sst.hide();
            this.mat.hide();
            this.sci.hide();
            this.hin.hide();

            const english1 = new Eng1();
            english1.display();
        });
//------------------UPDATE FOR LATER---------------------------------------------------------------------------------------------------------------------
        // this.hin.mousePressed(()=>{
        //     this.Back.hide();
        //     this.eng.hide();
        //     this.sst.hide();
        //     this.mat.hide();
        //     this.sci.hide();
        //     this.hin.hide();

        //     const hindi1 = new Hin1();
        //     hindi1.display();
        // });

        // this.sci.mousePressed(()=>{
        //     this.Back.hide();
        //     this.eng.hide();
        //     this.sst.hide();
        //     this.mat.hide();
        //     this.sci.hide();
        //     this.hin.hide();

        //     const science1 = new Sci1();
        //     science1.display();
        // });

        // this.sst.mousePressed(()=>{
        //     this.Back.hide();
        //     this.eng.hide();
        //     this.sst.hide();
        //     this.mat.hide();
        //     this.sci.hide();
        //     this.hin.hide();

        //     const sst1 = new Sst1();
        //     sst1.display();
        // });
//--------------------UPDATE OVER HERE-------------------------------------------------------------------------------------------------------------------

        this.mat.mousePressed(()=>{
            this.Back.hide();
            this.eng.hide();
            this.sst.hide();
            this.mat.hide();
            this.sci.hide();
            this.hin.hide();

            const maths1 = new Mat1();
            maths1.display();
        });
    }
}