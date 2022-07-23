import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerogatoryInsightComponent } from './derogatory-insight/derogatory-insight.component';
import {InsightTestedrecentlyComponent} from './insight-tested-recently/insight-tested-recently.component'
import { DetailsComponent } from './details/details.component';
import { InsightDetailsComponent } from './insight-details/insight-details.component';
import { InsightTestViewComponent } from './insight-test-view/insight-test-view.component';
import { InsightTestComponent } from './insight-test/insight-test.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryFocusComponent } from './inquiry-focus/inquiry-focus.component';
import { InsightTransactionDetailsComponent } from './insight-transaction-details/insight-transaction-details.component';
import { CounterPartyDetailsComponent } from './counter-party-details/counter-party-details.component';
import { DerivedComponent } from './derived/derived.component';

const routes: Routes = [
  {
    path: '',
    component: InquiryComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'details/insight-details',
    component: InsightDetailsComponent,
  },
  {
    path: 'details/insight-details/insight-test',
    component: InsightTestComponent,
  },
  {
    path: 'counter-party-details',
    component: CounterPartyDetailsComponent,
  },
  {
    path: 'derived',
    component: DerivedComponent,
  },
  {
    path: 'details/insight-details/insight-test/insight-test-view',
    component: InsightTestViewComponent,
  },
  {
    path: 'details/insight-details/insight-test/insight-tested-recently',
    component: InsightTestedrecentlyComponent,
  },
  {
    path: 'details/insight-details/derogatory-insight',
    component: DerogatoryInsightComponent,
  },
  {
    path: 'inquiry-focus',
    component: InquiryFocusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiryRoutingModule { }
