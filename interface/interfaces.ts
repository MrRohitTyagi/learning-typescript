// 👉 INTERFACES
// interface >>>>>> type because we can use inheritance
interface User {
  name: string;
  age: number;
  gender: "Male" | "female";
  //profileurl
  //date of birth
  //..etc
}
interface EmpInterface extends User {
  emp_id: number;
}
interface OwnerInterface extends User, EmpInterface {
  is_owner: boolean;
}

let userObj: User = {
  name: "rohit",
  age: 24,
  gender: "Male",
};

const employee: EmpInterface = {
  emp_id: 432,
  name: "rohit",
  age: 24,
  gender: "Male",
};
const owner: OwnerInterface = {
  is_owner: true,
  emp_id: 4324324,
  name: "rohit",
  age: 24,
  gender: "Male",
};
