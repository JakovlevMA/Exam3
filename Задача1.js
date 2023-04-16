class Animal {
constructor (name, type) {this.name = name; this.type = type;}
    speak () {return console.log(`I am a ${this.type} named ${this.name}`)}
}

class Dog extends Animal {
    bark () {
        console.log('Woof!')
    }
}
let dog1 = new Dog('Rex', 'dog')

dog1.speak()
dog1.bark()