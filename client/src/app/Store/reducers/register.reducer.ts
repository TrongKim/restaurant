import { userRegister, userRegisterSuccess } from './../actions/register.action';
import { createReducer, on } from "@ngrx/store";

const _registerReducer = createReducer(
    on(userRegister, () => {
        return { message: "wait to send your data to server" };
    }),
    on(userRegisterSuccess, (state, action) => {
        return { ...state, data: action }
    })
);

export function registerReducer(state, action) {
    return _registerReducer(state, action);
}