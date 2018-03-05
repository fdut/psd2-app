import { AuthService } from './auth.service';
import { Token } from './token.interface';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class AccountsService {
 
    constructor(private http: Http, private authService: AuthService) {}
    
    getListAccounts(){
            
        var headers = new Headers();
            headers.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
            headers.append('Accept', 'application/hal+json' );
            headers.append('x-ibm-client-id', this.authService.getClientID());
    
            return this.http.get(this.authService.getapicEndpoint() + '/v1/accounts', { headers: headers })
                    .map(res => res.json());
    }


}