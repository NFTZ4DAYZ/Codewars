class Shark extends Animal {
    constructor(name,age,status) {
      super();
      this.name = name;
      this.age = age;
      this.status = status;
      this.species = 'shark';
      this.legs = 0;
    }
  }
  
  class Cat extends Animal {
    constructor(name,age,status) {
        super();
        this.name = name;
        this.age = age;
        this.status = status;
        this.species = 'cat';
        this.legs = 4;
      
    }
     introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  
  }
  
  class Dog extends Animal {
    constructor(name,age,status,master) {
      super();
      this.master = master
      this.name = name;
      this.age = age;
      this.status = status;
      this.species = 'dog'
      this.legs = 4;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    greetMaster() {
      return `Hello ${this.master}`
    }
  }