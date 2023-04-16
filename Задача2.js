class Student {
    constructor (name, age, grades) {
        this.name = name
        this.age = age
        this.grades = grades
    }
    averageGrade (grades) {
        let average = 0;
        let sum = 0
        for (let i = 0; i < this.grades.length; i++) {
            sum = sum + this.grades[i]
        }
        average = sum / this.grades.length
        return average
    }
}

class CollegeStudent extends Student {
    constructor (name, age, grades, major) {
        super (name, age, grades);
        this.major = major;
    }
    averageGrade (grades) {
            let average = 0;
            let sum = 0
            for (let i = 0; i < this.grades.length; i++) {
                sum = sum + this.grades[i]
            }
            average = sum / this.grades.length
            console.log(`The average grade of ${this.name} is ${average}`)
        }
}
let student1 = new Student('John', 20, [5, 4, 3, 5, 5])
console.log(student1.averageGrade())
let student2 = new CollegeStudent('Jane', 22, [4, 4, 4, 5, 5], 'Computer Science')
student2.averageGrade()