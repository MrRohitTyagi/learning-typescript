// types in typescript

// primitive variables

//👉string
let username: string = "rohit"; //explicit
let password = "rohit"; //implicit
let address: string; // always tell type if assigning value afterwards
address = "bareilly";
// can use '' "" `` for string

//👉 number
let userage: number = 432;

//👉boolean
let isAdmin = true; //explicit
let isAdminimp: boolean = true; //implicit
let isAdminlater: boolean; //explicit
isAdminlater = false;

//👉null

let incomeImlplicit = null;
let incomeExplicit: null = null;
let income: null;
income = null;

//👉undefined

let jobprofileImlplicit = undefined;
let jobprofileExplicit: undefined = undefined;
let jobprofile: undefined;
jobprofile = undefined;

//👉any

const product: any = {
  //avoid using any type
  name: "television",
  price: 423,
  discount: 43,
};

//👉array
let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //number arr
let strArr: string[] = ["one", "two"]; //string arr
let mixedArray: (number | string)[] = ["one", 1, "two", 2]; //mixed arr
let strArrinArr: (string[] | string)[] = [["one"], "two"]; //complex arr

//fixed number of values
let oneELeArr: [number, string] = [1342, "string"]; //A tuple //number arr with fixed length
let rgb: [number, number, number] = [255, 255, 255]; //number arr with fixed length

let rgba: [number, number, number, number?] = [255, 255, 255]; // add "?" to make  a value not Required

//👉 objects

type PERSONTYPE = {
  name: string;
  age: number;
  job?: string; //job but not required by adding a "?"
  hobbies: string[];
  address: { city: string; pincode: number };
};

let person: PERSONTYPE = {
  name: "rohit",
  age: 25,
  //   job: "SDE",
  hobbies: ["playing", "sleeping"],
  address: {
    city: "bareilly",
    pincode: 243201,
  },
};

//👉functions in typescript

function sum(a: number, b: number): number {
  return a + b;
}
let ans = sum(4, 4);

//👉 any vs unknown

function fun() {
  return "pata ni kya";
}

let funAny: any = fun(); //switches off the type security
let funUnknown: unknown = fun(); // keeps the type security , prevents us from using unknown methods etc
let strAns = funUnknown as string;

// 👉 emun
//10 mins break 22 :42

enum DAYS {
  "mon",
  "tues",
  "wed",
}
let order: { orderDate: Date; deliveryDay: DAYS } = {
  orderDate: new Date(),
  deliveryDay: DAYS.tues,
};

// type alias name , assigning a different name to a type , creatinfa  custom type with a custom name
type xyz = string;
let userName: xyz = "Rohit";

type apnaType = string | number | boolean;

let unknownVariable: apnaType;
unknownVariable = 4;

function aliasfunc(param: apnaType): apnaType {
  return param;
}
aliasfunc(unknownVariable);

// 👉 string literal type
let varient: "primary" | "secondary" | "plain";
varient = "plain";

// 👉 function type
type PERRSONDETAILSTYPE = {
  first: string;
  last?: string;
  age: number;
  getFullName: (amount: number, who: string) => string;
};

let personDetails: PERRSONDETAILSTYPE = {
  first: "rohit",
  last: "tyagi",
  age: 24,
  getFullName: function (amount, who) {
    return this.first + " " + this.last + ` borrowed ${amount} from ${who}`;
  },
};

//👉option params in a  function

function opitional(a: number, b: number, c: number = 0): number {
  return a + b + c;
}
opitional(1, 2);

//👉function rest parameter

function multipleSum(a: number, b: number, ...rest: number[]): number {
  return (
    a +
    b +
    rest.reduce((acc, it) => {
      return acc + it;
    }, 0)
  );
}
console.log(multipleSum(1, 2, 3, 4, 5, 6, 5, 342, 4, 32, 4, 32, 43));
