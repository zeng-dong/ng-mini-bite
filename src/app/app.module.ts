import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: 'demo', loadChildren: './demo/demo.module#DemoMOdule' },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'contactmanager',
    loadChildren: () =>
      import('./contactmanager/contactmanager.module').then(
        (m) => m.ContactmanagerModule
      ),
  },
  {
    path: 'httpcommunication',
    loadChildren: () =>
      import('./httpcommunication/httpcommunication.module').then(
        (m) => m.HttpcommunicationModule
      ),
  },

  //{ path: '**', redirectTo: 'contactmanager' },
  { path: '**', redirectTo: 'httpcommunication' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
