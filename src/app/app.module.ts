import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {HeaderComponent} from './header/header.component';
import {TitreComponent} from './titre/titre.component';
import {MenuComponent} from './menu/menu.component';
import {PresentationComponent} from './presentation/presentation.component';
import {ServicesComponent} from './services/services.component';
import {PrestationComponent} from './prestation/prestation.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {DetailsPrestationComponent} from './details-prestation/details-prestation.component';
import {NgbModal, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitreComponent,
    MenuComponent,
    PresentationComponent,
    ServicesComponent,
    PrestationComponent,
    ContactComponent,
    FooterComponent,
    DetailsPrestationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
