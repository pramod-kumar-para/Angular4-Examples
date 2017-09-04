import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // styles property takes an array of strings that contain css code.
  // Class names and selectors are local to the component and dont collide with classes and selectors used elsewhere in the application.
  styles: [
    'h1 { font-weight: normal; color:red; }',
    'h2 { color: blue; }'
  ]
})
export class AppComponent {
  title = 'app';
}
