import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberAreaComponent } from './member-area.component';

const routes: Routes = [
  {
    path: '',
    component: MemberAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberAreaRoutingModule { }
