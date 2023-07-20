import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import { createLogger } from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const logger = createLogger();
const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
