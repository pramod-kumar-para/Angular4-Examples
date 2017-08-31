import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appSpyOn]'
})
export class SpyOnDirective implements OnInit, OnDestroy {

  // Constructors should do no more than set the initial local variables to simple values.
  constructor() { }

  // Use ngOnInit() for two main reasons:

  // To perform complex initializations shortly after construction.
  // To set up the component after Angular sets the input properties.
  ngOnInit() {
    console.info("Directive on init");
  }

  // put cleanup logic in ngOnDestroy(), logic must run before angular destroys the directive.
  // clean resources that wont be garbage collected automatically.
  // unsubscribe from observables and DOM events.
  ngOnDestroy() {
    console.info("Directive on destroy");
  }


}
