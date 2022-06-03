import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagerComponent } from './manager.component';



export const ManagerRoutes: Routes = [
  {
    path: '',
    component:ManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'reviews',
        pathMatch: 'full'
      },
      {
        path:'reviews',
        component:ReviewsComponent,
      },
      {
        path: 'employees',
        component:EmployeesComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(ManagerRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {
  static components = [ReviewsComponent,ReviewsComponent
  ]
}


