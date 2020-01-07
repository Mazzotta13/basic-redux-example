import { randomType } from "./random.types";

export const randomChange = (value) => ({
    type: randomType.CHANGE_NUMBER,
    payload: value
})