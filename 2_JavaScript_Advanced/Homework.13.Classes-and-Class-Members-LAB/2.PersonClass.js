class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let personMaria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
let personIvan = new Person('Ivan', 'Petrova', 23, 'ip@yahoo.com');
console.log(personMaria);
console.log(personMaria.toString());
console.log(personIvan);
console.log(personIvan.toString());