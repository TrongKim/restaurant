import { userRegister, userRegisterSuccess } from './../actions/register.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from 'rxjs';
import { RegisterService } from '../services/register.service';

@Injectable()
export class RegisterEffect{
    constructor(private actions$: Actions, private service: RegisterService) {}

    userRegister$ = createEffect((): any => {
        return this.actions$.pipe(ofType(userRegister), mergeMap(action => {
            return this.service.getDataRegister(action.userRegister).pipe(map(data => {
                return userRegisterSuccess({ data });
            }))
        }))
    })
}