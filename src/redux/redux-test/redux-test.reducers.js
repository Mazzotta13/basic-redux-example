import { testType } from "./redux-test.types";

const INITIAL_STATE = {
    hidden: true
};

const testReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case testType.TOGGLE_TEST:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default testReducer;