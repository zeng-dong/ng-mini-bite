import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HttpcommunicationAppComponent } from './httpcommunication-app/httpcommunication-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookTrackerErrorHandlerService } from './core/book-tracker-error-handler.service';
import { AddReaderComponent } from './add-reader/add-reader.component';

const routes: Routes = [
  {
    path: '',
    component: HttpcommunicationAppComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addbook', component: AddBookComponent },
      { path: 'addreader', component: AddReaderComponent },
      { path: 'editreader/:id', component: EditReaderComponent },
      { path: 'editbook/:id', component: EditBookComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    HttpcommunicationAppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    AddBookComponent,
    EditReaderComponent,
  ],
  providers: [
    { provide: ErrorHandler, useClass: BookTrackerErrorHandlerService },
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class HttpcommunicationModule {}
