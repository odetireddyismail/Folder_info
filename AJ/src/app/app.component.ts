import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Hallow ismail {{title}}
    <!-- <app-ismail></app-ismail> -->
    <app-emp></app-emp>
  </h2>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'New Component'
}
