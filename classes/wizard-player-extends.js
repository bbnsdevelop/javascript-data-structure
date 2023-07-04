class Player {

    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name} I'm a ${this.type}`);
    }
}


class Wizard extends Player {
    constructor(name, type, tools){
        super(name, type);
        this.tools = tools;

    }
    play(){
        console.log(`WEEEEEEEE I'm a ${this.type}, I'm hunting with ${this.tools}`);
    }
}



let p1 = new Player("Ana", "WAR");
p1.introduce();

let p2 = new Wizard("Jesse", "Hunter", "arrow");
p2.play();
p2.introduce();