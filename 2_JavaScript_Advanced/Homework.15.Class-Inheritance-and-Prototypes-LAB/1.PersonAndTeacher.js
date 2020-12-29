function personAndTeacherClasses() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {Person, Teacher};
}

let person = new Person('Ivo', 'ivo@aaa.bg');
console.log(person);

let teacher = new Teacher('Ivelin', 'ivelin@ivelin.com', 'swimming');
console.log(teacher);
