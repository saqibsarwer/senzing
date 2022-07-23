import { Component, OnInit, ViewChild } from '@angular/core';
import { LineStyle } from "@progress/kendo-angular-charts";
import datePoint from '../../../json/insight_CM12013U4311/MateriallySimilar/insightTestView-datePoint.json';
import iqr from '../../../json/insight_CM12013U4311/MateriallySimilar/insightTestView-iqrHistory.json';
import quart from '../../../json/insight_CM12013U4311/MateriallySimilar/insightTestView-3rdQuartile.json';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { ActivatedRoute } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
interface testView {
  casenumber: String;
  alertScnerio: String;
  totalAlertedamount: String;
  recency: String;
  rounding: String;
}
interface iqrhistory {
  quartile: String;
  amount: String;
}
interface quartile {
  quartile: String;
  amount: String;
}
@Component({
  selector: 'app-insight-test-view',
  templateUrl: './insight-test-view.component.html',
  styleUrls: ['./insight-test-view.component.scss']
})
export class InsightTestViewComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public style: LineStyle = "smooth";

  showTab!:number;
  showCase!:string;
  grpKey!:string;
  alert!:string;
  oAcctNo!:string;
  bAcctNo!:string;

  datePoint: any = [];
  getdatePoint: testView[] = datePoint;

  iqr: any = [];
  getiqr: iqrhistory[] = iqr;

  quart: any = [];
  getquart: quartile[] = quart;

  constructor(private route: ActivatedRoute) {
    this.chartOptions = {
      series: [
       {
          color: "#ff0000",
          data: [27337, 27337, 27337, 27337, 27337,27337, 27337],
          backgroundColor: "#fff",
          name:"Adj. 3rd Quartile"
        },
        {
          color: "transparent",
          data: [3213,1001.1, 12123, 9233.99, 5243.34, 2523.45,78000],
          name:"Alerted Amt"
        }
      ],
      chart: {
        height: 380,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        labels: {
          colors: "#FFFFFF",
          useSeriesColors: false,
        },
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: ["Jul'21", "Aug'21","Sep'21", "Oct'21", "Nov'21", "Dec'22", "Jan'22"]
      }
    };
  }

  ngOnInit(): void {
    this.showTab = +this.route.snapshot.params['tab'];
    this.showCase = this.route.snapshot.params['case'];
    this.grpKey = this.route.snapshot.params['key'];
    this.alert = this.route.snapshot.params['alert'];
    this.oAcctNo = this.route.snapshot.params['oAcctNo'];
    this.bAcctNo = this.route.snapshot.params['bAcctNo'];
  }

  getBackLink() {
    if(this.showTab==2) {
      console.log(this.showTab,"tested demo")
      return ['/inquiry/details/insight-details',{tab:this.showTab, case:this.showCase, key:this.grpKey}];
    }
    else  {
      console.log(this.showTab,"tested recently")
      return '/inquiry/details/insight-details';
    }
  }

  getLinkView() {
    if (this.showTab === 2) {
      return ['/inquiry/details/insight-details/insight-test',{tab:this.showTab, key: this.grpKey, case: this.showCase, alert: this.alert, oAcctNo: this.oAcctNo, bAcctNo: this.bAcctNo}]
    }
    else if (this.showTab === 3) {
      // '/inquiry/details/insight-details/insight-test/insight-test-view'
    }
    return '/inquiry/details/insight-details/insight-test';

   }

}
