import { AccountsService } from './../accounts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';
import { Token } from '../token.interface';

@Component({
  selector: 'app-aisp',
  templateUrl: './aisp.component.html',
  styleUrls: ['./aisp.component.css']
})

export class AispComponent implements OnInit {

  url: string;


  code: string;
  token: Token;
  itoken: string;
  accounts: string;
  error: string;
  step: number = 0;

  private sub: any;

  constructor(private route: ActivatedRoute, private authService: AuthService, private accountsService: AccountsService) { 

  }

  ngOnInit() {
    
    //url: String = `https://api.eu.apiconnect.ibmcloud.com/lbppoc-lbp/sb/psuoauth2security/v1/oauth2/authorize?response_type=code&client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&scope=aisp openid&state=123456&nonce=ABC-789`;
    this.url = this.authService.getapicEndpoint() + "/psuoauth2security/v1/oauth2/authorize?response_type=code&client_id=" + this.authService.getClientID() + "&redirect_uri=" + encodeURI(this.authService.getredirectUri()) + "&scope=aisp openid&state=123456&nonce=ABC-789";
    this.error="";
    
    this.sub = this.route.queryParams.subscribe(params => {
   
      if (typeof params['code'] != "undefined" ) {
        this.code = params['code']; 
        if (this.code != ""){
          console.log("in set code");
          this.authService.setGrantCode(this.code);
        }
        
      }else{
        console.log("in else: " + this.authService.getGrantCode() + " - " + this.authService.getAccessToken());
        if (typeof this.authService.getGrantCode() != "undefined"){
          this.code = this.authService.getGrantCode();
        }
        if (typeof this.authService.getAuth() != "undefined"){
          this.token = this.authService.getAuth();
        }
      }
   });
  }

  // Get Access Token step
  getToken(){

    this.step=1;
    this.error="";

    this.authService.generateAccessToken()
    .subscribe(data => {
      this.token=data;
      this.authService.setAuth(data);
    }  , error => {
      this.error=JSON.stringify(error);
    });
  }

  // Introspect Token 
  getIntrospectToken(){
    
    this.step=2;
    this.error="";
    
    this.authService.getIntrospectToken()
    .subscribe(data => {
      console.log(data);
      this.itoken=data;
    }  , error => {
      this.error=JSON.stringify(error);
      console.log(JSON.stringify(error));// Error getting the data
        });
      }
  
  // Get List Accounts step    
  getAccounts(){

    this.step=3;
    this.error="";

    this.accountsService.getListAccounts()
    .subscribe(data => {
      this.accounts=data;
    }  , error => {
      console.log(JSON.stringify(error));// Error getting the data
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
