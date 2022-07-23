import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from '../inquiry/details/details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InsightDetailsComponent } from '../inquiry/insight-details/insight-details.component';
import { InsightTestComponent } from '../inquiry/insight-test/insight-test.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatPaginatorModule } from '@angular/material/paginator';
import 'hammerjs';
import { NONE_TYPE } from '@angular/compiler';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, InsightDetailsComponent, InsightTestComponent],
  imports: [MatPaginatorModule,CommonModule, HomeRoutingModule, SharedModule, MatTabsModule, ChartsModule, DropDownsModule, FormsModule, NgCircleProgressModule.forRoot({
    // set defaults here
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300,
    showSubtitle: false,
    backgroundColor: "rgb(214, 236, 214)",
    backgroundPadding: -5,
    unitsFontSize: '10',
    titleFontSize: '10'
  })],
})
export class HomeModule { }
