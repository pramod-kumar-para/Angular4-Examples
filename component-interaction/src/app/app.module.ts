import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
