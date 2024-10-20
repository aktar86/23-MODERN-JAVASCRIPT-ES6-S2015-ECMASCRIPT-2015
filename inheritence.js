class Parent{
    constructor(){
        this.fatherName = "Solimullah";
        this.motherName = "khadija bibi";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullname(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Elina");
const baby2 = new Child("Selina");
console.log(baby.getFullname())
console.log(baby2)