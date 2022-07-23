import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layouts/footer/footer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SidebarMenuComponent } from '../layouts/sidebar-menu/sidebar-menu.component';

import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    SidebarMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
