import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmployeeComponent } from './employee.component';
import { CompletedComponent } from './completed/completed.component';



export const EmployeeRoutes: Routes = [
  {
    path: '',
    component:EmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'goals',
        pathMatch: 'full'
      },
      {
        path:'goals',
        component:GoalsComponent,
      },
      {
        path:'reviews',
        component:ReviewsComponent,
      },
      {
        path: 'add-goal',
        component:AddGoalComponent
      },{
        path: 'completed',
        component: CompletedComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(EmployeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
  static components = [GoalsComponent,AddGoalComponent,ReviewsComponent,CompletedComponent
  ]
}


