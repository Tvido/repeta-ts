interface IParams {
  size: string;
  toppings: string[];
}

interface IPizza {
  size: string;
  toppings: string[];
  // validateTopping(topping: string): boolean;
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  public size: string;
  public toppings: string[];

  // constructor(params: IParams) {
  constructor({ size, toppings = [] }: IParams) {
    this.size = size;
    this.toppings = toppings;
  }

  // non need 2 describe in interface IPizza
  private validateTopping(topping: string): boolean {
    console.log("topping :>> ", topping);
    return true;
  }

  public addTopping(topping: string) {
    console.log("topping :>> ", this.validateTopping(topping));
    this.toppings.push(topping);
  }
}

const pizza = new Pizza({ size: "medium", toppings: ["cheese"] });

console.log("pizza :>> ", pizza);

export {};
