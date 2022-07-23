import { Component, OnInit } from '@angular/core';
import homeData from '../../../json/home.json';
// import { InquiryStoreService } from 'src/app/services/inquiry/inquiry-store.service';
// import { jsonData } from 'src/app/interfaces/inquiry-details';

interface jsonData {
  timeSpent: Number;
  action: String;
  caseNo: String;
  caseDate: String;
  focusCustID: Number;
  customerName: String;
  analyst: String;
  insightSummary: String;
  view: String;
}
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  homeData: any = [];
  getHomeData: jsonData[] = homeData;


  // homeData: jsonData[] =[];

  // private inquiryStoreService: InquiryStoreService
  constructor() { }

  ngOnInit(): void {
    // this.getJsonData();
  }
  // getJsonData(): void {
  //   this.inquiryStoreService.getJsonData().subscribe(
  //     (response) => {
  //       if (response) {
  //         this.homeData = response;
  //         // this.loadDergoData();
  //       }
  //     },
  //     (error) => {
  //       //
  //     }
  //   );
  // }

  getViewLink(view: any, caseNo: any) {
    if (caseNo === 'CM12013U4311') {
      return ['/inquiry/details/insight-details',{tab:2,case:caseNo}]
    }
    else if (caseNo === 'CM72012U6572') {
      return '/inquiry/details';
    }
    else if (caseNo === 'CM32012U5267') {
      return '/inquiry/inquiry-focus';
    }
    return 'javascript:void(0)';
  }


}
