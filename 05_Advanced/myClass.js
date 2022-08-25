class User {
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname} is my full name`;
    }
    editName(newname){
        const myname = newname.split(" ");
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

class Teacher extends User {
    constructor(firstname, lastname, credit, subject){
        super(firstname, lastname, credit);
        this.subject = subject;
    }
    getFullName(){
        return `${this.firstname} ${this.lastname} is my full name and i teach ${this.subject}`;
    }
}

// const john = new User("John","Anderson", 34);
// console.log(john);
// console.log(john.getFullName());
// john.editName("Bruce Banner");
// console.log(john.getFullName());
// const sammy = new User();
// console.log(sammy);

const tony = new Teacher("Tony", "Stark", 34, "Technology");
console.log(tony);
console.log(tony.getFullName());