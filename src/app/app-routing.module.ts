import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'anne-parentalite/services', component: ServicesComponent },
  { path: 'anne-parentalite/', component: PresentationComponent },
  { path: 'anne-parentalite/a-propos', component: PresentationComponent },
  { path: 'anne-parentalite/contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
