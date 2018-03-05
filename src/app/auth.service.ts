import { Token } from './token.interface';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';

import apiproperties from "./api.endpoints"

@Injectable()
export class AuthService {

    private authprops: {clientid: string, clientsecret: string, apicEndpoint: string, redirectUri:string};

    private grantcode: string;
    private tokens: Token;
    private access_token: string;
    private id_token: string;
    private scope : string;
    private expire_in: number;
   
    constructor(private http: Http) {
        this.authprops = apiproperties;
    }

    // generateAccessToken : Get access token with authorization code
    generateAccessToken(){

        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );

        let body = 'grant_type=authorization_code&scope=aisp%20openid&code=' + this.grantcode + '&redirect_uri=' + this.authprops.redirectUri + '&client_id=' + this.authprops.clientid + '&client_secret=' + this.authprops.clientsecret;

        return this.http.post(this.authprops.apicEndpoint + '/psuoauth2security/v1/oauth2/token',body,{ headers: headers })
        .map(res => res.json());
    }

    // getIntrospectToken : Show content of access token
    getIntrospectToken(){
        
                var headers = new Headers();
                headers.append('Accept', 'application/json');
                headers.append('Content-Type', 'application/x-www-form-urlencoded' );
                headers.append('x-ibm-client-id', this.authprops.clientid );
                headers.append('x-ibm-client-secret', this.authprops.clientsecret );
        
                let body = 'token='+ this.access_token + '&token_type_hint=access_token';
        
                return this.http.post(this.authprops.apicEndpoint + '/psuoauth2security/v1/oauth2/introspect',body,{ headers: headers })
                .map(res => res.json());
            }
        
    // setGrantCode : store authorization code
    setGrantCode(data: string){
        this.grantcode = data;
    }

    // getGrantCode : return authorization code
    getGrantCode(){
        return this.grantcode;
    }

    // setAuth : store full token (include access_token, id_token, scope, expire, token type)
    setAuth(data: Token){
        this.tokens = data;
        this.access_token = data.access_token;
        this.id_token = data.id_token;
        this.scope = data.scope;
        this.expire_in = data.expires_in;
    }

    // getAuth : get full token (include access_token, id_token, scope, expire, token type)
    getAuth(){
        return this.tokens;
    }

    // getAccessToken : return access token
    getAccessToken(){
        return this.access_token;
    }

    // getIdToken : return id token
    getIdToken(){
        return this.id_token;
    }

    // getScope : return scope
    getScope(){
        return this.scope;
    }

    // getExpireIn : return expire_in value
    getExpireIn(){
        return this.expire_in;
    }

    // getClientID : return Client id
    getClientID(){
        return this.authprops.clientid;
    }

    // getClientSecret : return Client secret
    getClientSecret(){
        return this.authprops.clientsecret;
    }

    // getapicEndpoint : return apic endpoint
    getapicEndpoint(){
        return this.authprops.apicEndpoint;
    }

    // getapicEndpoint : return apic endpoint
    getredirectUri(){
        return this.authprops.redirectUri;
    }
}