import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import testReducer from './redux-test/redux-test.reducers';
import randomReducer from './random-n/random.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    testReducer: testReducer,
    randomReducer: randomReducer
})

export default persistReducer(persistConfig, rootReducer);