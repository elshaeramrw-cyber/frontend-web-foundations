// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }//- Add a constructor with default parameters
    sleep() {
        this.energy = this.energy + 10;
    }// - Add the sleep() method
    doSomethingFun() {
        this.energy = this.energy - 10;
        }//- Add the doSomethingFun() method
}
// Task 2: Code a Worker class
class Worker extends Person {//  Define the Worker class that extends Person
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;        
    }//  Add a constructor with additional parameters
    goToWork() {
        this.xp = this.xp + 10;
    }//  Add the goToWork() method
}

// Task 3: Code an intern object, run methods
function intern() {
    var worker1 =new Worker(0,10,"Bob",21,110) // Instantiate the Worker class with the intern properties
    worker1.goToWork(); //  Call the goToWork() method
    return worker1; //  Return the intern object
}

// Task 4: Code a manager object, methods
function manager() {
   var manager = new Worker(100, 30,"Alice", 30, 120) // Instantiate the Worker class with the manager properties
    manager.doSomethingFun(); // Call the doSomethingFun() method
    return manager; //  Return the manager object
}
