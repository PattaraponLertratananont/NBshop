import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareComponent } from './compare/compare.component';
import { CheckspecComponent } from './checkspec/checkspec.component';
import { NotebookComponent } from './notebook/notebook.component';
import { UltrabookComponent } from './ultrabook/ultrabook.component';
import { GamingbookComponent } from './gamingbook/gamingbook.component';
import { HybridComponent } from './hybrid/hybrid.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareComponent,
    CheckspecComponent,
    NotebookComponent,
    UltrabookComponent,
    GamingbookComponent,
    HybridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
