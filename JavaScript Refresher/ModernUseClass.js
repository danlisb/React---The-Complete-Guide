class Human {
  gender = "male";

  printMyGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Daniel";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyGender();
person.printMyName();
