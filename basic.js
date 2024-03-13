// types in typescript
// primitive variables
//👉string
var username = "rohit"; //explicit
var password = "rohit"; //implicit
var address; // always tell type if assigning value afterwards
address = "bareilly";
// can use '' "" `` for string
//👉 number
var userage = 432;
//👉boolean
var isAdmin = true; //explicit
var isAdminimp = true; //implicit
var isAdminlater; //explicit
isAdminlater = false;
//👉null
var incomeImlplicit = null;
var incomeExplicit = null;
var income;
income = null;
//👉undefined
var jobprofileImlplicit = undefined;
var jobprofileExplicit = undefined;
var jobprofile;
jobprofile = undefined;
//👉any
var product = {
    //avoid using any type
    name: "television",
    price: 423,
    discount: 43,
};
//👉array
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //number arr
var strArr = ["one", "two"]; //string arr
var mixedArray = ["one", 1, "two", 2]; //mixed arr
var strArrinArr = [["one"], "two"]; //complex arr
//fixed number of values
var oneELeArr = [1342, "string"]; //A tuple //number arr with fixed length
var rgb = [255, 255, 255]; //number arr with fixed length
var rgba = [255, 255, 255]; // add "?" to make  a value not Required
var person = {
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
function sum(a, b) {
    return a + b;
}
var ans = sum(4, 4);
//👉 any vs unknown
function fun() {
    return "pata ni kya";
}
var funAny = fun(); //switches off the type security
var funUnknown = fun(); // keeps the type security , prevents us from using unknown methods etc
var strAns = funUnknown;
// 👉 emun
//10 mins break 22 :42
var DAYS;
(function (DAYS) {
    DAYS[DAYS["mon"] = 0] = "mon";
    DAYS[DAYS["tues"] = 1] = "tues";
    DAYS[DAYS["wed"] = 2] = "wed";
})(DAYS || (DAYS = {}));
var order = {
    orderDate: new Date(),
    deliveryDay: DAYS.tues,
};
var userName = "Rohit";
var unknownVariable;
unknownVariable = 4;
function aliasfunc(param) {
    return param;
}
aliasfunc(unknownVariable);
// 👉 string literal type
var varient;
varient = "plain";
var personDetails = {
    first: "rohit",
    last: "tyagi",
    age: 24,
    getFullName: function (amount, who) {
        return this.first + " " + this.last + " borrowed ".concat(amount, " from ").concat(who);
    },
};
//👉option params in a  function
function opitional(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
opitional(1, 2);
//👉function rest parameter
function multipleSum(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return (a +
        b +
        rest.reduce(function (acc, it) {
            return acc + it;
        }, 0));
}
console.log(multipleSum(1, 2, 3, 4, 5, 6, 5, 342, 4, 32, 4, 32, 43));
