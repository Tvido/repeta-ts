// bad
// const addExpression = function (parOne: number, parTwo: number): number {
//   return parOne + parTwo;
// };
// console.log("addExpression :>> ", addExpression(1, 2));

// bad
// interface IFnType {
//   (x: number, y: number): number
// }
// const exampleExpression: IFnType = function (parOne, parTwo) {
//   return parOne + parTwo;
// };
// console.log("exampleExpression :>> ", exampleExpression(1, 2));

//
//
type FnType = (x: number, y: number) => number;
const addExpression: FnType = function (parOne, parTwo) {
  return parOne + parTwo;
};
console.log("addExpression :>> ", addExpression(1, 2));
// ==========================
const arrFunc: FnType = (parOne, parTwo) => {
  return parOne + parTwo;
};
console.log("arrFunc :>> ", arrFunc(3, 2));

//
//
type Fn = (a: number, b: number, c: number, ...rest: number[]) => number;
const fn: Fn = (a, b, c, ...rest) => {
  return a + b + c;
};
console.log("fn :>> ", fn(3, 2, 1, 3, 5, 7, 8));

// ==========================================================================
// ==========================================================================
// ==========================================================================
enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

type Size = PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;

interface IPizza {
  size: Size;
  toppings: string[];
  // new
  logSize?(): void;
  // old
  getSize?: () => string;

  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Medium,
  toppings: ["sause", "mushrooms"],

  logSize() {
    return this.size;
  },

  getSize() {
    return this.size;
  },

  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log("pizza :>> ", pizza);

export {};
