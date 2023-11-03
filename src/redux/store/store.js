import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default configureStore({
  reducer: rootReducer,

  middleware: (getMiddleware) => getMiddleware().concat(thunk),
});
