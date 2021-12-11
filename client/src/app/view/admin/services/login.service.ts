import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from 'src/app/models/login.model';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private http: HttpClient) {}

    loginUser(account: UserLogin) {
        const reqBody = {
            email: account.email,
            password: account.password
        };
        return this.http.post('http://localhost:8000/api/login', reqBody).pipe(map(data => {
            console.log(data);
        }))
    }

    
}