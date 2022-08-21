import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookComponent } from './components/book/book.component';
import { DenemeComponent } from './components/deneme/deneme.component';

const routes: Routes = [
  { path: "book/detail", component: BookDetailComponent},
  { path: "book", component: BookComponent },
  {path:"deneme", component:DenemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
