type ID = number | string;

const userId: ID = 5;
console.log("userId :>> ", userId);

const postId: ID = "sd7f6ds";
console.log("postId :>> ", postId);

//
type Coords = [number, number];

const coords: Coords = [32.032, 45.364];
console.log("coords :>> ", coords);

//
type RequestStatus = "request" | "success" | "error";

const reqStat: RequestStatus = "success";
console.log("reqStat :>> ", reqStat);

export {};
