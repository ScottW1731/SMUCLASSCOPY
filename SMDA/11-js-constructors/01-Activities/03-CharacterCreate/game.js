// var name = "Talandar";

// var profession = "PurifierLeader";

// var gender = "robot";

// 1-10    with 10 being highest number for anything except age
var age = 9999;
var strength = 8;
var HP = 8;


function PurifierLeader(charge, shield) {
    
    this.charge = charge;
    this.shield = shield;
    this.chronoboost = function(){
        if (this.charge === true){
            console.log(this.shield);

        }
    };

}


var Talandar = new PurifierLeader(true, "FOR AIUR!");
Talandar.chronoboost();


// function Herofactory(herotype){
//     if(herotype = "PurifierLeader")
     

// }
