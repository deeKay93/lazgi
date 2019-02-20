import { UiState } from "./reducers/UiReducer";
import { createStore, combineReducers, Store, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { AllActions } from "./actions";

export interface StoreState {
  ui: UiState;
}

// Build Reducer
const reducer = combineReducers<StoreState>(reducers);

// Build Middleware
// @ts-ignore window object has not __REDUX_...
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware());

// Build Store
const store: Store<StoreState> = createStore<StoreState, AllActions, any, any>(reducer, enhancers);

export const dispatch = (action: any) => {
  return store.dispatch(action);
};

export default store;