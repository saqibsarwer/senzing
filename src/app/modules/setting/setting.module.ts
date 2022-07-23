import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingRoutingModule    
  ]
})
export class SettingModule { }
