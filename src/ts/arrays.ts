const arrA: Array<number> = [1, 2, 3, 4, 5];
console.log("arrA", arrA);

const arrB: readonly number[] = [1, 2, 3, 4, 5];
console.log("arrB", arrB);

const arrC: readonly (number | string)[] = [1, 2, "one", "two"];
console.log("arrC", arrC);

// tuple
const coords: [number, number] = [50.1245, 40.2565];
console.log("coords", coords);

const arr: [string, number] = ["id", 25300];
console.log("arr", arr);

export {};
