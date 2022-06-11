import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { AddComponent } from './add/add.component';
import { RmComponent } from './rm/rm.component';
import { FormsModule } from '@angular/forms';
import { Comp2Component } from './comp2/comp2.component';
import { UpdComponent } from './upd/upd.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    AddComponent,
    RmComponent,
    Comp2Component,
    UpdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
