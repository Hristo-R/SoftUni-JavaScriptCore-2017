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

//let person = new Person('Ivo', 'ivo@ivo.bg');
//console.log(person);
//
//let teacher = new Teacher('Ivelin', 'ivo@ivo.bg', 'swimming');
//console.log(teacher);