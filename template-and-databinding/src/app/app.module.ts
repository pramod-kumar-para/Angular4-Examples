import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    ChildComponentComponent,
    TwoWayDataBindComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
