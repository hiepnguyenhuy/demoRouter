import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CreateComponent} from './product/create/create.component';
import {EditComponent} from './product/edit/edit.component';
import {ShowComponent} from './product/show/show.component';

import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

    CreateComponent,
    EditComponent,
    ShowComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
