//
// Functions
const reverse = <T>(array: T[]) => {
    return [...array].reverse();
};

// console.log("res: ", reverse<number>([1, 2, 3, 4, 5]));
// console.log("res: ", reverse<string>(['ajax', 'polly', 'cucumber']));

console.log("res: ", reverse([1, 2, 3, 4, 5]));
console.log("res: ", reverse(["ajax", "polly", "cucumber"]));
console.log("res: ", reverse([1, 2, 3, 4, 5, "ajax", "polly", "cucumber"]));

const isEqual = <F, S>(a: F, b: S) => {
    return Object.is(a, b);
};

console.log("res", isEqual(1, 1));
console.log("res", isEqual(5, 4));
console.log("res", isEqual(5, "5"));

const foo = <O, R>(mult: O, ...rest: R[]) => {
    return "result";
};

console.log("res", foo(1, [2, 3, 5]));

interface ILength {
    length: number;
}

const dataLength = <T extends ILength>(arg: T) => {
    return arg.length;
};

console.log("dataLength", dataLength([1, 2, 3, 4, 5]));
console.log("dataLength", dataLength("some word"));

// Interfaces

interface IUser<U> {
    id: U;
}

const one: IUser<number> = { id: 24 };
const two: IUser<string> = { id: "fd54dfvd7" };

interface ITab<C> {
    id: string;
    position: number;
    active: boolean;
    content: C;
}

type tabStrType = ITab<string>;

const tabStr: tabStrType = {
    id: "id-1",
    position: 2,
    active: true,
    content: "Tab Data",
};

const tabSArr: ITab<string[]> = {
    id: "id-1",
    position: 2,
    active: true,
    content: ["Tab Data 1", "Tab Data 2"],
};

// generic function
type GAnimationState = "playing" | "paused";
type GHttpState = "request" | "success" | "error";

const makeState = <S>(inatialState: S) => {
    let state = inatialState;

    const getState = () => {
        return state;
    };

    const setState = (newState: S) => {
        state = newState;
    };

    return {
        getState,
        setState,
    };
};

const animationState = makeState<GAnimationState>("playing");
animationState.setState("paused");

const httpState = makeState<GHttpState>("success");
httpState.setState("error");

// generic class
// class MakeState<S> {
//     state: S

//     constructor(inatialState: S) {
//         this.state = inatialState
//     }

//     getState() {
//         return this.state
//     }

//     setState(newState: S) {
//         this.state = newState
//     }
// }

// const animationState = new MakeState<GAnimationState>('playing')
// animationState.setState('paused')

// const httpState = new MakeState<GHttpState>('success')
// httpState.setState('error')

export { reverse, isEqual, foo, one, two, tabStr, tabSArr };
