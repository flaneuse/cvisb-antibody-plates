import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plates',
  templateUrl: './plates.component.html',
  styleUrls: ['./plates.component.scss']
})
export class PlatesComponent implements OnInit {


  private plate_rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; // 96 well plate; row labels
  private plate_cols: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
  private num_plates: number;
  private num_repl: number = 3;
  private dilutions: number[] = [150, 1500, 3500];
  private donors: string[] = ['donor A'];

  private plate_num: number = 1;
  private expt_id: string = 'NKD';
  private samples: string[] = [
    'TUL 7',
    'TUL 1',
    'TUL 2',
    'TUL 3',
    'TUL 4',
    'TUL 5',
    'TUL 6',
    'TUL 8'];

  private controls: string[] = [
    'no fluorescence',
    'HIV neg',
    'positive control'
  ];

  private plate: Array<Object> = [];

  private replicates: string[] = [];

  constructor() { }

  ngOnInit() {
    this.createReplicates(this.samples, this.controls, this.num_repl);
  }

  createReplicates(samples, controls, num_repl) {

    samples = samples.sort();

    samples = samples.concat(controls);


    for (let i = 0; i < samples.length; i++) {
      for (let j = 0; j < num_repl; j++) {
        this.replicates.push(samples[i]);
      }
    }

    console.log(this.replicates)
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    // this.selectedSamples.push(e.dragData);
    // console.log(this.droppedItems)
    //
    console.log('dropped')
    console.log(e)
    console.log(e.target)
    //
    // this.selectedSamples = this.droppedItems;
  }

}
