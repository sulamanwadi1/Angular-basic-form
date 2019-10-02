import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'jobdetails/:id', component: JobdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
