import { Component, OnInit } from '@angular/core';
import insightDetail from '../../../json/insight_CM72012U6572/CaseStatus/historical_cases.json';
import insightTransaction from '../../../json/insight_CM72012U6572/CaseStatus/insightDetails-transaction.json';
import insightDerogatoryTransaction from '../../../json/insight_CM12013U4311/CaseStatus/historical_cases.json';
import insightDerogatory from '../../../json/insight_CM12013U4311/CaseStatus/insightDetails-derogatory.json';
import { ActivatedRoute } from '@angular/router';
// import data from '../../../json/data.json';
interface insightData {
  caseNo: String;
  alertScnerio: String;
  status: String;
  description: String;
  totalAmount: String;
  caseDate: String;
  analyst: String;
  role: String;
  relation: String;
  comments: String;
}
interface transaction {
  sql: String;
  grpKey: String;
  alertScenario: String;
  originatorAcctNo: String;
  originatorCustNo: String;
  beneficiaryAcctNo: String;
  beneficiaryCustNo: String;
  productType: String;
  role: String;
  numberOfTxns: Number;
  inSample: String;
  usd: String;
  tranCurrency: String;
  insight: String;
}
interface Dtransaction {
  caseNo: String;
  alertScnerio: String;
  status: String;
  description: String;
  totalAmount: String;
  caseDate: String;
  caseDispDate: String;
  analyst: String;
  role: String;
  relation: String;
  comments: String;
}

interface derogatory {
  sql: String;
  grpKey: String;
  alertScenario: String;
  originatorAcctNo: String;
  originatorCustNo: String;
  beneficiaryAcctNo: String;
  beneficiaryCustNo: String;
  productType: String;
  role: String;
  numberOfTxns: Number;
  inSample: String;
  usd: String;
  tranCurrency: String;
  insight: String;
}

@Component({
  selector: 'app-insight-details',
  templateUrl: './insight-details.component.html',
  styleUrls: ['./insight-details.component.scss'],
})
export class InsightDetailsComponent implements OnInit {
  showTab!:number;
  showCase!:string;
  insightDetail: any = [];
  getInsightDetails: insightData[] = insightDetail;

  insightTransaction: any = [];
  getInsightTransaction: transaction[] = insightTransaction;

  insightDerogatoryTransaction: any = [];
  getInsightDerogatoryTransaction: Dtransaction[] = insightDerogatoryTransaction;

  insightDerogatory: any = [];
  getinsightDerogatory: derogatory[] = insightDerogatory;

  // data:any = [];
  // insightDetails:any;
  // insightTransaction:any;
  // insightDerogatory:any;
  constructor(private activate: ActivatedRoute) {

  }

  // jsonRecursive(jsonDemo:any, key:string){
  //   if(!jsonDemo.hasOwnProperty("length")){
  //     for (var item in jsonDemo){
  //       var value = jsonDemo[item];
  //       if(value.hasOwnProperty("length") && typeof value == "object"){
  //         this.jsonRecursive(jsonDemo[item], key);
  //       } else if(typeof jsonDemo[item] == "object"){
  //         this.jsonRecursive(jsonDemo[item], key);
  //       }else{
  //         if (item == key){
  //           console.log(key, jsonDemo[key]);
  //         }
  //       }
  //     }
  //   }else{
  //     for (var item in jsonDemo){
  //       this.jsonRecursive(jsonDemo[item], key);
  //     }
  //   }
  // }

  ngOnInit(): void {
    // this.jsonRecursive(data, "")
    // this.insightDetails = data['insight-details'];
    // this.insightDerogatory = data['insightDetails-derogatory'];
    // this.insightTransaction = data['insightDetails-transaction'];
    //  console.log(data.home);


    // this.activate.queryParams
    // .subscribe(params => {
    //   console.log(params); // { orderby: "price" }
    //   this.showTab = params['tab'];
    //   console.log(this.showTab);
    //   }
    // );
    this.showTab = +this.activate.snapshot.params['tab'];
    this.showCase = this.activate.snapshot.params['case'];
    console.log(this.showTab,this.showCase);
   }

   getIndex() {
    return this.showTab - 1;
   }

   getLinkView(grpKey: any, alertScenario: any, originatorAcctNo: any, beneficiaryAcctNo: any, insight: any) {

    if (insight == 'Approved Previously but Demoted') {
      return ['/inquiry/details/insight-details/insight-test/insight-test-view',{tab:this.showTab, key: grpKey, case: this.showCase, alert: alertScenario, oAcctNo: originatorAcctNo, bAcctNo: beneficiaryAcctNo}];
    }
    else if (insight == 'Nexus Detected With RMF') {
      //console.log(insight,this.showTab,this.showCase);
      return ['/inquiry/details/insight-details/derogatory-insight',{tab:this.showTab, key: grpKey, case: this.showCase, alert: alertScenario, oAcctNo: originatorAcctNo, bAcctNo: beneficiaryAcctNo}]
    }
    else if (insight == 'Approved Previously') {
      console.log(insight,this.showTab,this.showCase);
      return ['/inquiry/details/insight-details/insight-test/insight-tested-recently'];
    }
    else if (insight == 'Approved previously but expired') {
      console.log(insight,this.showTab,this.showCase);
      return ['/inquiry/details/insight-details/insight-test/insight-tested-recently',{tab:this.showTab, key: grpKey, case: this.showCase}];

   } else {
    return [] }};
}
