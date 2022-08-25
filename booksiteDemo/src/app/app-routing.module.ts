import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookComponent } from './components/book/book.component';


const routes: Routes = [
  { path: "home", component: BookComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "detail", component: BookDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
