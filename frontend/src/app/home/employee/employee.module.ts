import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CompletedComponent } from './completed/completed.component';



@NgModule({
  declarations: [
    ...EmployeeRoutingModule.components
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ],
  providers:[
    AuthGuard
  ]
})
export class EmployeeModule { }
