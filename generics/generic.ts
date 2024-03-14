interface GenericUserInterface<T> {
  // to make interfaces generic by passing type as a  argument <T>
  name: string;
  age: number;
  extra: T[];
}
interface OwnerInterface {
  address: string;
  salary: number;
}

const owner: GenericUserInterface<OwnerInterface> = {
  name: "string",
  age: 1234,
  extra: [{ address: "bareilly", salary: 32 }], //array of objects
};
const person: GenericUserInterface<string> = {
  name: "string",
  age: 1234,
  extra: ["one", "two"], //array of strings
};
const emp: GenericUserInterface<number> = {
  name: "string",
  age: 1234,
  extra: [3, 4], //array of numbers
};
