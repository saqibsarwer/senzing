import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import reports from '../../../json/customerData.json';

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
  selector: 'app-derived',
  templateUrl: './derived.component.html',
  styleUrls: ['./derived.component.scss']
})
export class DerivedComponent implements OnInit {
  showCase!:string;
  reports: any = [];
  getreports: report[] = reports;
  p: number = 1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showCase = this.route.snapshot.params['case'];
    debugger
  }

  getName(name: String) {
    var fullName = name.split(" ");
    return fullName;
  }

}
