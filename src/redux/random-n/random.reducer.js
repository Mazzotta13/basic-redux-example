import { randomType } from "./random.types";

const INITIAL_STATE = {
    number: 0
};

const testReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case randomType.CHANGE_NUMBER:
            return {
                ...state,
                number: action.payload
            }
        default:
            return state;
    }
}

export default testReducer;