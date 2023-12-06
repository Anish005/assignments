

class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  //we can have functions as below
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  //we can also have the static function
  static myType(){
    console.log("Animal");//not associated with objects but the class itself
  }

}
let dog = new Animal("dog",4)//dog is the object of the class Animal
//classes are like blueprint
Animal.speak()//throws error
Animal.myType()//runs without the need of instantiating the class