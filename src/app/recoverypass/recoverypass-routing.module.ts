import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverypassComponent } from './recoverypass.component';

const routes: Routes = [
  {
    path: '',
    component: RecoverypassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverypassRoutingModule { }
