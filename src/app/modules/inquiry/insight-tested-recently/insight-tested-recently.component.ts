import { Component, OnInit, ViewChild } from '@angular/core';
import { LineStyle } from "@progress/kendo-angular-charts";
import datePoint from '../../../json/insight_CM72012U6572/MateriallySimilar/insightTestView-datePoint.json';
import iqr from '../../../json/insight_CM72012U6572/MateriallySimilar/insightTestView-iqrHistory.json';
import quart from '../../../json/insight_CM72012U6572/MateriallySimilar/insightTestView-3rdQuartile.json';

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
  selector: 'app-insight-tested-recently',
  templateUrl: './insight-tested-recently.component.html',
  styleUrls: ['./insight-tested-recently.component.scss']
})
export class InsightTestedrecentlyComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public style: LineStyle = "smooth";

  showTab!:number;
  showCase!:string;
  grpKey!:string;

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
          data: [141690, 141690, 141690, 141690, 141690,141690, 141690],
          backgroundColor: "#fff",
          name:"Adj. 3rd Quartile"
        },
        {
          color: "transparent",
          data: [43213,33001, 69231, 54233, 73243, 62523, 23392],
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
        categories: ["Sep'21", "Oct'21","Nov'21", "Dec'21", "Jan'22", "Feb'22", "Mar'22"]
      }
    };
  }

  ngOnInit(): void {
    this.showTab = +this.route.snapshot.params['tab'];
    this.showCase = this.route.snapshot.params['case'];
    this.grpKey = this.route.snapshot.params['key'];
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
      return ['/inquiry/details/insight-details/insight-test',{tab:this.showTab, key: this.grpKey, case: this.showCase}]
    }
    else if (this.showTab === 3) {
      // '/inquiry/details/insight-details/insight-test/insight-test-view'
    }
    return '/inquiry/details/insight-details/insight-test';

   }

}
