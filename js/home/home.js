class Home{
    constructor(){
        this.mainmenu;
        this.help;
    }

    display(){
        if(gameState === 0){
            this.mainmenu = createButton('Main Menu');
            this.help = createButton('Help');
        }

        this.mainmenu.position(displayWidth/2-110,displayHeight/2+280);
        this.mainmenu.style('width', '100px')
        this.mainmenu.style('height', '30px')
        this.mainmenu.style('background', 'orange')

        this.help.position(displayWidth/2+10,displayHeight/2+280);
        this.help.style('width', '100px')
        this.help.style('height', '30px')
        this.help.style('background', 'orange')

        this.mainmenu.mousePressed(()=>{
            gameState = 1;

            const select = new Select();
            select.display();

            this.mainmenu.hide();
            this.help.hide();

            console.log(this.mainmenu);
        });

        this.help.mousePressed(()=>{
            gameState = 2;

            const help1 = new Help();
            help1.display();

            this.mainmenu.hide();
            this.help.hide();

            console.log(this.help);
        });
    }
}