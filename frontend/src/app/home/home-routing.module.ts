import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserGuard } from '../core/guards/user.guard';
import { AuthGuard } from '../core/guards/auth.guard';


export const HomeRoutes: Routes = [
  {
    path:'employee',
    loadChildren: ()=> import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate:[UserGuard]
  },
  {
    path:'manager',
    loadChildren: ()=> import('./manager/manager.module').then(m => m.ManagerModule),
    canActivate: [UserGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
  static components = [HomeComponent,
    ManagerComponent, EmployeeComponent
  ]
}
