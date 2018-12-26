import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, RegisterDialog } from './app.component';
import { CompareComponent } from './compare/compare.component';
import { CheckspecComponent } from './checkspec/checkspec.component';
import { NotebookComponent } from './notebook/notebook.component';
import { UltrabookComponent } from './ultrabook/ultrabook.component';
import { GamingbookComponent } from './gamingbook/gamingbook.component';
import { HybridComponent } from './hybrid/hybrid.component';
import { ContactComponent } from './contact/contact.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CompareComponent,
    CheckspecComponent,
    NotebookComponent,
    UltrabookComponent,
    GamingbookComponent,
    HybridComponent,
    ContactComponent,
    RegisterDialog,
  ],
  entryComponents:[RegisterDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [BrowserAnimationsModule],
    [NoopAnimationsModule],
    NgbModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
