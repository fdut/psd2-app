import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AispComponent } from './aisp/aisp.component';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth.service';
import { AccountsService } from './accounts.service';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'aisp', component: AispComponent},
  { path : 'analytics', component: AnalyticsComponent},
  { path : 'settings', component: SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AispComponent,
    AnalyticsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService, AccountsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
