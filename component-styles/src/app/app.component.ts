import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // styles property takes an array of strings that contain css code.
  // Class names and selectors are local to the component and dont collide with classes and selectors used elsewhere in the application.
  styles: [
    'h1 { font-weight: normal; color:red; }',
    'h2 { color: blue; }',
    'h4 { color: purple; font-size: 40px; }'
  ],
  // 1.	To remove shadow DOM on a component set encapsulation property on component to ViewEncapsulation.None
	// 2.	For ViewEncapsulation.Native globally written styles will not be inherited.
	// 3.	For viewEncapsulation.Emulated globally written styles will be inherited.
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
