import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditCardDirective } from './shared/directives/credit-card.directive';
import { CreditCardComponent } from './shared/components/credit-card/credit-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NavbarDropdownDirective } from './shared/directives/navbar-dropdown.directive';
import { NavbarDropdownComponent } from './shared/components/navbar-dropdown/navbar-dropdown.component';
import { HilightDirective } from './shared/directives/hilight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    CreditCardComponent,
    NavbarDropdownDirective,
    NavbarDropdownComponent,
    HilightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
