import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetFedUnDataComponent } from './component/get-fed-un-data/get-fed-un-data.component';
import { GetCitiesDataComponent } from './component/get-cities-data/get-cities-data.component';

const routes: Routes = [
{path: '', component: GetFedUnDataComponent},
{path: 'citylist', component: GetCitiesDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
