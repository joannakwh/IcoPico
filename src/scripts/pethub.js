
class Pethub extends Phaser.Scene {
    constructor() {
        super({ key: 'Pethub', active: true })
    
    }
    init(data) {
        // console.log('init', data);
        // this.greetings = data.hi;
        // this.check = 0;

    }
    preload() {
        for (var i = 0; i < information.length; i++) {
            this.load.image('pet' + i, '../images/pets/' + information[i] + '.png');
        }
        this.load.image('arrow', '../images/buttons/Other/arrow.png');
        this.load.image('backPet', '../images/sky.png');
        this.load.image('blackHeart', '../images/buttons/pet_hub/black_heart.png');
        this.load.image('yellowHeart', '../images/buttons/pet_hub/yellow_heart.png');
        this.load.image('redHeart', '../images/buttons/pet_hub/red_heart.png');


    }

    create() {
        console.log(this.time.now);
    // console.log('current date '+ currentDate);
     var timeNow = new Date('2019-05-14T18:21:00');
// console.log('time now ' + timeNow);
     console.log((timeNow.getTime() - player.lastlogin.getTime())/3600000);
        console.log("current pet" + player.activePet);
        this.resetFood = 0;
        this.cameras.main.setBounds(0, 0, 1236 * information.length, 681);
        this.cameras.main.setBackgroundColor('#aaa');
        this.pet = [];
        var arrowR = [];
        var arrowL = [];

        //create container for all information about pet and Flip between pets
        for (var i = 0; i < information.length; i++) {
           

            //right arrow
            arrowR[i] = this.add.sprite(this.scale.width * 0.95, this.scale.height / 2, 'arrow');
            arrowR[i].setInteractive();
            arrowR[i].on('pointerdown', () => {
                var cam = this.cameras.main;
                if (player.activePet < information.length - 1) {
                    player.activePet++;
                }
                else {
                    player.activePet = 0;
                }
                cam.centerOn(618 + 1236 * player.activePet, 0);
            });
            //left arrow
            arrowL[i] = this.add.sprite(this.scale.width * 0.04, this.scale.height / 2, 'arrow');
            arrowL[i].flipX = !arrowL[i].flipX;
            arrowL[i].setInteractive();
            arrowL[i].on('pointerdown', () => {
                var cam = this.cameras.main;
                if (player.activePet == 0) {
                    player.activePet = information.length - 1;
                }
                else {
                    player.activePet--;
                }
                cam.centerOn(618 + 1236 * player.activePet, 0);
            });
            



            this.pet[i] = this.add.container(i * 1236, 0);
            this.pet[i].add(this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'backPet')); //background
            this.pet[i].add(this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'pet' + i)); //addpet
            this.pet[i].add(arrowR[i]);
            this.pet[i].add(arrowL[i]);
        
            this.checkHappiness(i, this.pet);
            var cam = this.cameras.main;
            cam.centerOn(618 + 1236 * player.activePet, 0);

        }
        
    }
    update() {
        if(updateHappiness == 1){
            this.pet[player.activePet].remove(this.heart);
            this.checkHappiness(player.activePet, this.pet);
            updateHappiness = 0;
        }
    

    }
    dateModifier(){
        console.log('hi');
    }
    




    checkHappiness(i, pet) {
        console.log(player.happiness[i]);
        this.heart;
        if (player.happiness[i] < 33) {
            this.heart = this.add.sprite(this.scale.width * .95, this.scale.height * .07, 'blackHeart');
        }
        else if (player.happiness[i] < 66) {
            this.heart = this.add.sprite(this.scale.width * .95, this.scale.height * .07, 'yellowHeart');
        }
        else {
            this.heart = this.add.sprite(this.scale.width * .95, this.scale.height * .07, 'redHeart');
        }
        pet[i].add(this.heart);
    }
}
