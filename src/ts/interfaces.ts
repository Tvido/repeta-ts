interface IConfig {
  selector: string;
  readonly perPage: number;
  startIndex?: number;
  draggable: boolean;
}

const config: IConfig = {
  selector: "#one",
  perPage: 5,
  startIndex: 0,
  draggable: false,
};

console.log("config :>> ", config);

//
interface IPeople {
  [key: string]: number;
}

const people: IPeople = {
  mango: 5,
  polly: 3,
  kiwi: 2,
  ajax: 43,
  sam: 32,
};
console.log("people :>> ", people);

const people2 = {
  mango: 5,
  polly: 3,
  kiwi: 2,
  ajax: 43,
  sam: 32,
} as IPeople;
console.log("people2 :>> ", people2);

// Extending
interface IOne {
  color: string;
}

interface ITwo extends IOne {
  fontSize: number;
}

let one: ITwo = {
  color: "black",
  fontSize: 30,
};
console.log("one :>> ", one);

export {};
