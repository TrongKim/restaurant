import { createAction, props } from "@ngrx/store";
import { UserLogin } from "src/app/models/login.model";

export const USER_LOGIN = '[Login Component] Login';
export const USER_LOGIN_SUCCESS = '[Login Component] Login Success';

export const userLogin = createAction(USER_LOGIN, props<{loginData: UserLogin}>());
export const userLoginSuccess = createAction(USER_LOGIN_SUCCESS, props<{data}>());