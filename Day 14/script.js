// Task-1: Define a class "Person" with properties "name" and "age", and a method to return a greeting message. Create an instance of the class and log the greeting message.

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
      
    }

    greeting(){
       console.log("hey hi");
    }

    updateAge(newAge){
        this.age = newAge;
        console.log("the updated age is ",newAge)
    }

    static greet(){
        return "hello this generic greeting message from person class"
    }
}


const person = new User("abhi",25);

console.log(person);
person.greeting();


  // Task-2: Add a method to the "Person" class that updates the age property and logs the updated age.

console.log(person);
person.updateAge(26);
console.log(person)

  // Task-3: Define a class "Student" that extends the "Person" class. Add a property "studentId" and a method to return the student ID. Create a instance of the "Student" class and log the student ID.

class Student extends User{
    static studentCount = 0;
    constructor(name,age,studentId){
        super(name, age);
        this.studentId =studentId;
        Student.studentCount++;
    }

    genStudentId(studentId){
        this.studentId = studentId;
        return `${this.name} has a student Id ie; ${this.studentId}`
    }

    greeting(studentId){
        this.studentId = studentId;
        return `hello  iam ${this.name} ${this.studentId}`
    }
    static getStudentCount(){
        return `the total num of students are ${this.studentCount}`
    }
}

const student1 = new Student('ani',20);
console.log(student1);
console.log(student1.genStudentId(123));


 // Task-4: Override the greeting method in the "Student" class to include the student ID in the message. Log the overriden greeting message.

console.log(student1.greeting(123));


  // Task-5: Add a static method to "Person" class that returns a generic greeting message. Call this static without creating an instance of the class and log the message.

console.log(User.greet())


  // Task-6 Add a static property to "Student" class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

console.log(Student.studentCount)


  // Task-7: Add a getter method to the "Person" class to return the full name (assume a "firstname" and "lastname" property). Create an instance and log the full name using the getter.

class User1 {
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullname (){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(name){
        const [firstname, lastname] = name.split(" ");
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const newPerson = new User1("abhi","ts",25);

console.log(newPerson.fullname)

  // Task-8: Add a setter method to the "Person" class to update the name properties ("firstname" and "lastname"). Update the name using the setter and log the updated full name.

const newPerson2 = new User1("ani","ts");
console.log(newPerson2.fullname);

newPerson2.fullname = "ani talakal";
console.log(newPerson2.fullname);


  // Task-9: Define a class "Account" with private fields for "balance" and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account{
    #balance;
    constructor(amount){
        if(this.#balance <0){
            throw new Error("balance shld not be negetive")
        }
        this.#balance = amount;
    }

    #deposit(amount) {
        if(amount<=0) {
            throw new Error("depit shld be more than zero")
        }
        this.#balance +=amount;
    }
    getDepositAmt(amount){
        return this.#deposit(amount);
    }


    #withdraw(amount){
        if(amount<0){
            throw new Error("withdraw shld be more than zero")
        }

        if(amount > this.#balance){
            throw new Error(" balance is less than the withdraw amount")
        }

        this.#balance -= amount;
    }

    getwithDraw(amount){
        return this.#withdraw(amount);
    }

    getBalence(amount){
        return this.#balance;
    }
}

  // Task-10: Create an instance of the "Account" class and test the deposit and withdraw methods, logging the balance after each operation.

const myAcc = new Account(200);
console.log(myAcc.getBalence());
myAcc.getDepositAmt(500);
console.log(myAcc.getBalence());
myAcc.getwithDraw(300);
console.log(myAcc.getBalence());