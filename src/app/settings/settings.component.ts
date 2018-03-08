import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  grantCode: string;
  accessToken:string;
  idToken:string;
  scope:string;
  expire_in:number;
  redirectUri:string;

  clientid:string;
  clientsecret:string;
  apicEndpoint:string;
  webappversion:string;

  ngOnInit() {
    this.grantCode=this.authService.getGrantCode();
    this.accessToken=this.authService.getAccessToken();
    this.idToken=this.authService.getIdToken();
    this.scope=this.authService.getScope();
    this.expire_in=this.authService.getExpireIn();
  
    this.clientid=this.authService.getClientID();
    this.clientsecret=this.authService.getClientSecret();
    this.redirectUri=this.authService.getredirectUri();

    this.webappversion=this.authService.getwebappversion();

    this.apicEndpoint=this.authService.getapicEndpoint();
  }




}
