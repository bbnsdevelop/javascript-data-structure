class Player {

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name} I'm a ${this.type}`);
    }
}

let p1 = new Player("Ana", "WAR");

p1.introduce();