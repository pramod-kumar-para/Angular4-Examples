import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit {


  @Input() name: string;
  constructor() { }

  // Responds when angular resets data-bound input properties.
  ngOnChanges(simpleChanges) {
    console.log(simpleChanges);
    console.log('In change method');
  }
  // Angular calls this method shortly after creating the component.
  ngOnInit() {
    console.log('In init method');
  }

  // Detect and act upon changes that Angular can't or won't detect on its own.
  // Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck() {
    console.log('In do check method');
  }

}
