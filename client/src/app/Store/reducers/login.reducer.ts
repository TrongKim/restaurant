import { userLogin, userLoginSuccess } from './../actions/login.action';
import { createReducer, on } from "@ngrx/store";

const _loginReducer = createReducer(
    on(userLogin, () => {
        return { message: "wait to send your data to server" };
    }),
    on(userLoginSuccess, (state, action) => {
        return { ...state, data: action }
    })
);

export function loginReducer(state, action) {
    return _loginReducer(state, action);
}