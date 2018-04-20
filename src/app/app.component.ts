import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plate generator';

  private num_plates: number = 2;
  private num_empty: number = 3;
  private num_empty_per_expt: number = 3;


}
