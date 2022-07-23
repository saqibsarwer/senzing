import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportComponent } from './report/report.component';
import { ReportRoutingModule } from './report-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule,
    NgxPaginationModule

  ]
})
export class ReportModule { }
