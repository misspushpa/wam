import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopstateComponent } from './topstate/topstate.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: 'topState', component: TopstateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
