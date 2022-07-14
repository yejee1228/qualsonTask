import { $CombinedState, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import main, { MainState } from './main';

const reducer = combineReducers({
    main,
});

const persistConfig = {
    key: "root",
    storage,
}

export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    main: MainState;
}

export default persistReducer(persistConfig, reducer);