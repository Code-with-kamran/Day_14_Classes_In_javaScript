// Creating a class and Object
class person {
  static msg = "Helllo coding lovers";
  static a;
  constructor(fname, lname, age) {
    person.a = person.a + 1;
    this.fname = fname;
    this.age = age;
    this.lname = lname;
  }
  greeting(params) {
    console.log(`hello ${this.name}`);
  }
  updateAge(age) {
    this.age = age;
  }
  fullName(){
    console.log(`Full name is ${this.fname} ${this.lname} `);
  }
  setFullName(Fname,Lname){
    this.fname =Fname;
    this.lname = Lname; 
  }
}
person.a = 0;

const obj = new person("kamran", "hassan", 23);
console.log(obj.name);
console.log(obj.age);
obj.greeting();
obj.updateAge(89);
console.log(obj.age);

// Activity 002
class student extends person {
  constructor(studentId) {
    super("kamran", "hassan", 78);
    this._studentId = studentId;
  }

  studentId() {
    console.log("function run");
    // return this.studentId;
    return this._studentId;
  }
  greeting() {
    console.log(`hello ${this.name} and id = ${this._studentId}`);
  }
}

const obj2 = new student("5678uhgvc");
// obj2.updateAge();
console.log(obj2.studentId());
obj2.greeting();
// Activity 03
console.log("\t\t\t\t\tStatic Method and Properties");

class staticMethod {
  static a = "this is a static properties";
  static StaticMethod() {
    console.log(`Call in static function ${staticMethod.a}`);
  }
}

console.log(staticMethod.a);
staticMethod.StaticMethod();
console.log(`total students ${person.a}`);
console.log(person.msg);
obj.fullName();
obj.setFullName("Arslan", "Zullafqar")
obj.fullName();