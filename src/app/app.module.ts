import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AadhaarComponent} from "./aadhaar services components/aadhaar_service.component";
import {Routes, RouterModule} from "@angular/router";
import {MedicalComponent} from "./aadhaar services components/MedicalComponents/ModeicalComponent";
import {AadhaarService} from "./aadhaar services components/aadhaar_service.service";
import {InformationComponent} from "./aadhaar services components/MedicalComponents/Information";
//import {AadhaarService} from "./aadhaar services components/aadhaar_service.service";

const appRoutes: Routes = [
  { path: '', component: AadhaarComponent },
  {path:'medical',component:MedicalComponent},
  {path:'information',component:InformationComponent}];


@NgModule({
  declarations: [
    AppComponent,AadhaarComponent,MedicalComponent,InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [AadhaarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
