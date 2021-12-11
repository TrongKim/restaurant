import { userLogin, userLoginSuccess } from './../actions/login.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../services/login.service";
import { map, mergeMap } from 'rxjs';

@Injectable()
export class LoginEffect{
    constructor(private actions$: Actions, private service: LoginService) {}

    userLogin$ = createEffect((): any => {
        return this.actions$.pipe(ofType(userLogin), mergeMap(action => {
            return this.service.getDataLogin(action.loginData).pipe(map(data => {
                return userLoginSuccess({ data });
            }))
        }))
    })
}