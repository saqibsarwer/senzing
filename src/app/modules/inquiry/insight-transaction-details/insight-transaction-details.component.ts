import { Component, OnInit } from '@angular/core';
import insightTest from '../../../json/insight_CM72012U6572/CharProfile/TESTED_PREV_ROUNDING.json';
import insightMaterialy from '../../../json/insight-materialySimilarTest.json';
import insightTestChange from '../../../json/insigh-testNetChange.json';

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
  CrTxn: String;
  InSample: String;
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
  selector: 'app-insight-transaction-details',
  templateUrl: './insight-transaction-details.component.html',
  styleUrls: ['./insight-transaction-details.component.scss']
})
export class InsightTransactionDetailsComponent implements OnInit {

  insightTest: any = [];
  getinsightTest: insightstest[] = insightTest;

  insightMaterialy: any = [];
  getinsightMaterialy: materially[] = insightMaterialy;

  insightTestChange: any = [];
  getinsightTestChange: testChange[] = insightTestChange;

  constructor() { }

  ngOnInit(): void {
  }

  getBackLink() {
      return ['/inquiry/details/insight-details',{tab:2}]
  }

}
