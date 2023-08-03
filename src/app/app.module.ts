import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Containercomponent } from './container/mycontainercomponent';
import { TopnavComponent } from './container/topnav/topnav.component';
import { HttpClientModule } from '@angular/common/http';
import { TopstateComponent } from './topstate/topstate.component';
import {TestcrudComponent} from './testcrud/testcrud.component';

@NgModule({
  declarations: [
    AppComponent,
    Containercomponent,
    TopnavComponent,
    TopstateComponent,
    TestcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
