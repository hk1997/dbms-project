import {Component, OnInit} from '@angular/core';
import {AadhaarService} from "../aadhaar_service.service";
import {Hospital} from "./Hospital";
import {Uid} from "./Uid";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {AadhaarComponent} from "../aadhaar_service.component";
import {Insurance} from "./Insurance";
@Component({
  selector:'medical-component',
  templateUrl:'./MedicalComponent.html.html',
  styleUrls:['./medicalComponent.stylesheet.css']
})


export  class MedicalComponent implements OnInit
{
  show1:boolean=false; //to show information
  show2:boolean=false;
  hospital_id:string;
  aadhaar_no:string;
  rand_no;
  typed_no:number;
  valid:boolean=false;
  //test='yo';

  //information about hospital and validity of aadhaar card
   hospital:Hospital=new Hospital();
    aadhaar:Uid=new Uid();
    insurance:Insurance[]=[];


    hp:Hospital=new Hospital();


    constructor(private aadhaarService:AadhaarService,private router:Router)
    {

    }
    ngOnInit()
  {
    this.rand_no=Math.floor(Math.random() * 9000) + 1000;
    this.show1=false;
    this.show2=false;
  }
  onSubmit()
  {
    this.aadhaar.Uid='0';
    this.valid=true;
    let flag=false;
    let valid:boolean=true;
    if(this.hospital_id==null)
      flag=true;
    else if(this.aadhaar_no==null || this.aadhaar_no.length!=12)
      flag=true;

    if(flag==true)
    {
      return new alert('Please enter a valid hospital id/aadhaar no.');
    }
    else if(this.rand_no!=this.typed_no)
    {
      this.rand_no=Math.floor(Math.random() * 9000) + 1000;
      return new alert('Retype Captcha');
    }
    else
    {
          this.aadhaarService.getHospitals(this.hospital_id).subscribe(tasks=>{

           if(tasks==null)
           {
              this.valid=false;
              new alert('invalid hospital');

           }
            else
           {
             this.hospital=tasks;
              this.show2=true;
           }
          });

          this.aadhaarService.getPersonDetails(this.aadhaar_no).subscribe(tasks=>{
            if(tasks==null)
            {
              this.valid=false;
              new alert('invalid Aadhaar number');

            }
            else
            {

              this.aadhaar=tasks;
              this.aadhaarService.getInsurance(this.aadhaar.Uid).subscribe(task=>{
                this.insurance=task;
                console.log('finished');
            });
              this.show1=true;
            }
          })

    }

  }
}
