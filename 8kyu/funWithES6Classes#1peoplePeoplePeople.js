
class Person {
    constructor(firstName = 'John',lastName ='Doe',age = 0,gender = 'Male') {
      this.age = age;
      this.firstName = firstName;
      this.gender = gender;
      this.lastName = lastName;
    }
    
    sayFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`
    }
  }
  
  