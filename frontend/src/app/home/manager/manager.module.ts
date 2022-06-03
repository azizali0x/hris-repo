import { NgModule } from '@angular/core';
import { ManagerRoutingModule } from './manager-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
   ...ManagerRoutingModule.components
  ],
  imports: [
    SharedModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
