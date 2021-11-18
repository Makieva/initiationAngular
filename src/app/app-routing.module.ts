import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [

  { path: '', component: ProduitComponent },
  { path: 'registration', component: RegistrationComponent },


]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
