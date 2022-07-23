import { Component, OnInit } from '@angular/core';
import insightTest from '../../../json/insight_CM72012U6572/CharProfile/TESTED_PREV_ROUNDING.json';
import insightTestView from '../../../json/insight_CM12013U4311/CharProfile/insight-test-view.json';
import insightMaterialy from '../../../json/insight-materialySimilarTest.json';
import insightTestChange from '../../../json/insigh-testNetChange.json';
import insightTestChangeView from '../../../json/insight_CM12013U4311/CharProfile/insigh-testNetChangeView.json';
import { ActivatedRoute } from '@angular/router';

interface insightstest {
  caseNo: String;
  date: String;
  status: String;
  scenario: String;
  counterGeoRik: String;
  noTransaction: Number;
  totalAmount: String;
  rounding: String;
  CrAmt: String;
  MinTxnAmt: String;
  MaxTxnAmt: String;
  CrTxn: String
}

interface materially {
  testedTransaction: String;
  similarCharacter: String;
}

interface testChange {

  currency: String;
  rndTxn: String;
  nonRndTxn: String;
  rndTxn_1: String;
  rndTxn_4: String;
  rndTxn_99: String;
}

@Component({
  selector: 'app-insight-test',
  templateUrl: './insight-test.component.html',
  styleUrls: ['./insight-test.component.scss']
})
export class InsightTestComponent implements OnInit {
  showTab!:number;
  showCase!:string;
  grpKey!:string;
  alert!:string;
  oAcctNo!:string;
  bAcctNo!:string;

  insightTest: any = [];
  getinsightTest: insightstest[] = insightTest;
  insightTestView: any = [];
  getinsightTestView: insightstest[] = insightTestView;

  insightMaterialy: any = [];
  getinsightMaterialy: materially[] = insightMaterialy;

  insightTestChange: any = [];
  getinsightTestChange: testChange[] = insightTestChange;
  insightTestChangeView: any = [];
  getinsightTestChangeView: testChange[] = insightTestChangeView;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showTab = +this.route.snapshot.params['tab'];
    this.showCase = this.route.snapshot.params['case'];
    this.grpKey = this.route.snapshot.params['key'];
    this.alert = this.route.snapshot.params['alert'];
    this.oAcctNo = this.route.snapshot.params['oAcctNo'];
    this.bAcctNo = this.route.snapshot.params['bAcctNo'];
    console.log(this.oAcctNo);

  }

  getBackLink() {
    if(this.showTab==2) {
      return ['/inquiry/details/insight-details/insight-test/insight-test-view',{tab:this.showTab, key: this.grpKey, case:this.showCase, alert: this.alert, oAcctNo: this.oAcctNo, bAcctNo: this.bAcctNo}];
    }
    else  {
      return '/inquiry/details/insight-details/insight-test/insight-tested-recently';
    }
  }

  getLinkView() {
    if (this.showTab === 2) {
      return ['/inquiry/details/insight-details/insight-test',{tab:this.showTab, key: this.grpKey, case: this.showCase}]
    }
    else if (this.showTab === 3) {
      // '/inquiry/details/insight-details/insight-test/insight-test-view'
    }
    return '/inquiry/details/insight-details/insight-test';

   }

}
