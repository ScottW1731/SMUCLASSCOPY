

function DigitalPal(){
    hungry = false;
    sleepy = false;
    bored = true;
    age = 0;

    this.feed = function (){
        if (hungry === true) {
            console.log("That was yummy!")
            hungry = false;
            sleepy = true;
            
        }
        else if (hungry === false) {
            console.log("No thanks I'm full!")
        }
        
    }
    this.sleepy = function() {
        if (sleepy === true) {
            console.log("Zzzzzz")
            sleepy = false;
            bored = true;
            increaseAge()
            
        }
        else if (sleepy === false) {
            console.log("No way! I am not tired!")

        }
    }
    this.play = function() {
        if (bored === true) {
            console.log("Yeah, lets play!")
            bored = false;
            hungry = true;

        }
        else if (bored === false) {
            console.log("Not now, later.")
        }
    }
    this.increaseAge = function() {
        this.age += 1;
        console.log("Happy Birthday to me! I am" + this.age + "old!")

        }
    
}


var dog = new DigitalPal();
// dog.feed()

