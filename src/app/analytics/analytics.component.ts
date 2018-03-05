import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  analyticsLink = "https://eu.apiconnect.ibmcloud.com/v1/kibana/share-kibana#/dashboard/tpp-default?embed=true&_g=(catalogId%3A'5a7d838e0cf282db979a3803'%2CcatalogName%3ASandbox%2CorgId%3A'5a7d838d0cf282db979a37f7'%2CrefreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cmode%3Aquick%2Cto%3Anow%2Fw))";

  constructor() { }

  ngOnInit() {
  }


  onUpdateLink(){
    
  }
}
