import { createAction, props } from "@ngrx/store";
import { UserRegister } from "src/app/models/register.model";

export const REGISTER = '[Register Component] Register';
export const REGISTER_SUCCESS = '[Register Component] Register Success'; //

export const userRegister = createAction(REGISTER, props<{userRegister: UserRegister}>());
export const userRegisterSuccess = createAction(REGISTER_SUCCESS, props<{data}>());