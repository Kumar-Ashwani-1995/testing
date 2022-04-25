import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:"task",component:TaskComponent},
  {path:"",component:BasicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
