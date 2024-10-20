// class car{
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const myNewCar = new car("BMW", 2023);
// const myNewCar2 = new car("FORD", 2010);

// console.log(myNewCar)
// console.log(myNewCar2)

class student{
    constructor(id, name, year, date){
        this.id = id;
        this.name = name;
        this.year = year;
        this.school = "Kafigor high school";
        this.gender = "female";
        this.admitionDate = date;
    }
}

const student1 = new student(12, "Hamida", 2022, '12.03.2021');
const student2 = new student(14, "Fahmida", 2021, '12.03.2021');

console.log(student1)
console.log(student2)