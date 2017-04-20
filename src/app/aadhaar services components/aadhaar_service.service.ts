import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from "@angular/http";

@Injectable()

export class AadhaarService
{

  constructor(private http:Http)
  {

  }
   getHospitals(hid:string)
  {/*
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');*/

    return this.http.post('http://localhost:3000/hospitals',{Hid:hid}).map(res=>res.json());
  }

  getPersonDetails(uid:string)
  {
    return this.http.post('http://localhost:3000/persons',{Uid:uid}).map(res=>res.json());
  }

  getInsurance(uid:string)
  {
    return this.http.post('http://localhost:3000/insurance',{Uid:uid}).map(res=>res.json());
  }
}
