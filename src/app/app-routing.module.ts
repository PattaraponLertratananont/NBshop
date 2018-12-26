import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './compare/compare.component'
import { CheckspecComponent } from './checkspec/checkspec.component'
import { NotebookComponent } from './notebook/notebook.component'
import { UltrabookComponent } from './ultrabook/ultrabook.component'
import { GamingbookComponent } from './gamingbook/gamingbook.component'
import { HybridComponent } from './hybrid/hybrid.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  {
    path: 'compare',
    component: CompareComponent
  },
  {
    path: 'checkspec',
    component: CheckspecComponent
  },
  {
    path: 'category/notebook',
    component: NotebookComponent
  },
  {
    path: 'category/ultra',
    component: UltrabookComponent
  },
  {
    path: 'category/gamingbook',
    component: GamingbookComponent
  },
  {
    path: 'category/hybrid',
    component: HybridComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
