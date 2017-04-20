import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Uid} from "./Uid";

@Component({
  selector:'information',
  template:`
  {{id}}
`
})

export class InformationComponent implements OnInit
{
  UID:String;
  id='1';
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
      .switchMap((params: Params) =>
        this.id=params['Uid']
      );

  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}

