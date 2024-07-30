import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


import { HeaderComponent } from './header/header.component';
import { AuditorIcmsComponent } from './auditor-icms/auditor-icms.component';
import { AuditorIcmsEntradasComponent } from './auditor-icms/auditor-icms-entradas/auditor-icms-entradas.component';
import { AuditorIcmsSaidasComponent } from './auditor-icms/auditor-icms-saidas/auditor-icms-saidas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuditorIcmsComponent,
    AuditorIcmsEntradasComponent,
    AuditorIcmsSaidasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
