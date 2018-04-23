import { Component, OnInit } from '@angular/core';

import { FormControl } from "@angular/forms";

import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-expts',
  templateUrl: './expts.component.html',
  styleUrls: ['./expts.component.scss']
})
export class ExptsComponent implements OnInit {

  expts: string[] = ['ADCD', 'ADCP', 'ADNP', 'NKD'];

  selection = new SelectionModel<Element>(true, []);

  constructor() { }

  ngOnInit() {
  }

}
