import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PresentationComponent} from './presentation/presentation.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {DetailsPrestationComponent} from './details-prestation/details-prestation.component';

const routes: Routes = [
  {path: 'services', component: ServicesComponent, title: 'Prestations - Anne Parentalité'},
  {path: '', redirectTo: 'a-propos', pathMatch: 'full'},
  {path: 'a-propos', component: PresentationComponent, title: 'A propos - Anne Parentalité'},
  {path: 'contact', component: ContactComponent, title: 'Contact - Anne Parentalité'},
  {path: 'details/:id', component: DetailsPrestationComponent, title: 'Anne Parentalité'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
