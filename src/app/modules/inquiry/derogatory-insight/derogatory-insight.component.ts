import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { InquiryStoreService } from 'src/app/services/inquiry/inquiry-store.service';
import deogatory from '../../../json/insight_CM12013U4311/nexus/derogatory-insight.json';
// import { deogatoryJson } from '../../../interfaces/inquiry-details';
// import { InquiryStoreService } from 'src/app/services/Inquiry/inquiry-store.service';
interface deogatoryJson {
  caseNo: String;
  alertScenario: String;
  originatorAccts: String;
  BenAcct: String;
  focusType: String;
  tranId: String;
  tranamount:String;
  tranDate: String;
}

@Component({
  selector: 'app-derogatory-insight',
  templateUrl: './derogatory-insight.component.html',
  styleUrls: ['./derogatory-insight.component.scss']
})
export class DerogatoryInsightComponent implements OnInit {
  deogatory: any = [];
  getdeogatory: deogatoryJson[] = deogatory;
  // deogatoryData: deogatoryJson[] = [];
  constructor(private location:Location) { }

  ngOnInit(): void {
    // this.getDeogatoryData();
  }

  goBack(){
    this.location.back();
  }

  // getDeogatoryData(): void {
  //   this.inquiryStoreService.getDeogatoryJson().subscribe(
  //     (response) => {
  //       if (response) {
  //         this.deogatoryData = response;
  //         // this.loadDergoData();
  //       }
  //     },
  //     (error) => {
  //       //
  //     }
  //   );
  // }

}
