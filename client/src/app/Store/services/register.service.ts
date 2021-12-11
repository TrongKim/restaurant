import { UserRegister } from 'src/app/models/register.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { login_enums } from "src/app/enums/login.enums";

@Injectable({
    providedIn: 'root'
})
export class RegisterService{
    constructor(private http: HttpClient) {}

    getDataRegister(account: UserRegister) {
        return this.http.post(login_enums['api_register'], account).pipe(map((data) => {
            return data;
        }))
    }
}