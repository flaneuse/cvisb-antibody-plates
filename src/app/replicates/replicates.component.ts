import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replicates',
  templateUrl: './replicates.component.html',
  styleUrls: ['./replicates.component.scss']
})
export class ReplicatesComponent implements OnInit {

  private num_repl: number = 3;
  private replicates: number[] = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
