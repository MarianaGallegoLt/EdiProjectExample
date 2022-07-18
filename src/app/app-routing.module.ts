import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { InvoiceViewerComponent } from './views/invoice-viewer/invoice-viewer.component';

const routes: Routes = [
  {
    path: '',
      component: DisplayComponent,
      pathMatch: 'full'
  },
  {
    path: 'viewFile',
    component: InvoiceViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
