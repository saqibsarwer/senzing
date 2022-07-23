import { Component, OnInit } from '@angular/core';
import reports from '../../../json/insight_CM32012U5267/Report/report.json';

interface report {
  entityId: Number;
  country: String;
  jurisdiction: String;
  customerNo: String;
  relationship: String;
  matchRule: String;
  name: String;
  identifiers: any;
  database: String;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reports: any = [];
  getreports: report[] = reports;
  p: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

  getName(name: String) {
    var fullName = name.split(" ");
    return fullName;
  }

}
