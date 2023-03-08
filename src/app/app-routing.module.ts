import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsPrestationComponent } from './details-prestation/details-prestation.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: 'a-propos', pathMatch : 'full' },
  { path: 'a-propos', component: PresentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details/:id', component: DetailsPrestationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
