import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InquiryRoutingModule } from './inquiry-routing.module';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryFocusComponent } from './inquiry-focus/inquiry-focus.component';
// import { ChartsModule } from '@progress/kendo-angular-charts';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// import 'hammerjs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InsightTestedrecentlyComponent } from './insight-tested-recently/insight-tested-recently.component';
import { InsightTestViewComponent } from './insight-test-view/insight-test-view.component';
import { DerogatoryInsightComponent } from './derogatory-insight/derogatory-insight.component';
import { CounterPartyDetailsComponent } from './counter-party-details/counter-party-details.component';
import { DerivedComponent } from './derived/derived.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GraphComponent } from './derogatory-insight/graph/graph.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [InquiryComponent,InsightTestedrecentlyComponent, InquiryFocusComponent, InsightTestViewComponent, DerogatoryInsightComponent, CounterPartyDetailsComponent, DerivedComponent, GraphComponent],
  imports: [
    CommonModule,
    SharedModule,
    InquiryRoutingModule,
    // ChartsModule,
    // DropDownsModule,
    NgApexchartsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    NgxGraphModule,
    LayoutModule
  ]
})
export class InquiryModule { }
