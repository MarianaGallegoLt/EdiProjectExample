import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DisplayComponent } from './components/display/display.component';
import { InvoiceViewerComponent } from './views/invoice-viewer/invoice-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DisplayComponent,
    InvoiceViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
