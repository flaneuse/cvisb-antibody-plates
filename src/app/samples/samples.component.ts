import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  samples: string[] = ['TUL 1',
    'TUL 2',
    'TUL 3',
    'TUL 4',
    'TUL 5',
    'TUL 6',
    'TUL 7',
    'TUL 8'];

  // droppedItems: any = [];
  selectedSamples: any = [];

  all_selected: boolean = false;
  all_fill: string = "accent";

  onItemDrop(e: any) {
    // Get the dropped data here
    this.selectedSamples.push(e.dragData);
    // console.log(this.droppedItems)
    //
    // this.selectedSamples = this.droppedItems;
  }

  onItemDelete(e: any) {
    // remove any selected items
    this.selectedSamples = this.selectedSamples.filter(d => d !== e.dragData);

  }


  onSelectAll(e: any) {
    this.all_selected = !this.all_selected;

    if (this.all_selected) {
      this.selectedSamples = this.samples.slice(0); // create clone of array; otherwise is a pointer, and deletion will lead to chaos
    } else {
      this.selectedSamples = [];
    }
  }

  onClearAll(e: any) {
    this.all_selected = false;
    this.selectedSamples = [];
    // this.droppedItems = [];
  }

  constructor() { }

  ngOnInit() {
  }

}
