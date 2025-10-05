// /* Factory Function */
// const methods = {
//   run() {
//     console.log(`${this.name} is running`);
//   }
// };

// function createBox(name: string) {
//   const box = Object.create(methods); // {}
//   box.name = name;

//   return box;
// }

// const box1 = createBox("box 1");
// console.log("box1 = ", box1);

// function Box(name: string) {
//   this.name = name;
// }
// Box.prototype.run = function () {
//   console.log(`${this.name} is running`);
// };

// const box2 = new Box("box 2");
// console.log("box2 = ", box2);

// class _Box {
//   constructor(public name: string) {}
//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// const box3 = new _Box("box 3");
// console.log("box3 = ", box3);

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name);
  }
}

// class Doctor extends Person {
//   jump() {
//     console.log(`${this.name} is jumping...`);
//   }

//   eat2(parent) {
//     console.log(parent === this);
//     console.log("Mark is running...");
//   }
// }

// const doctor = new Doctor("Kent");
// doctor.eat();
