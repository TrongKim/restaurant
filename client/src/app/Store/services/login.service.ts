import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { login_enums } from "src/app/enums/login.enums";
import { UserLogin } from "src/app/models/login.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private http: HttpClient) {}

    getDataLogin(account: UserLogin) {
        return this.http.post(login_enums['api_login'], account).pipe(map((data) => {
            return data;
        }))
    }
}