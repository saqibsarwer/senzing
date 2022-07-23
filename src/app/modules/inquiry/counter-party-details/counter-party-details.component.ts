import { Component, OnInit } from '@angular/core';
import counterPartyDetails from '../../../json/counter-part-details.json';
import counterPartyDetails1 from '../../../json/counter-part-details1.json';
import { ActivatedRoute } from '@angular/router';

interface counterPartyDetailsData {
  entityType: String;
  relation: String;
  accountNo: String;
  customerNo: String;
  name: String;
  address: String;
  type: String;
  geo: String;
  insight: String;
  memo: String;
}

@Component({
  selector: 'app-counter-party-details',
  templateUrl: './counter-party-details.component.html',
  styleUrls: ['./counter-party-details.component.scss']
})
export class CounterPartyDetailsComponent implements OnInit {

  showCase!:string;

  getCounterPartyDetails: counterPartyDetailsData[] = counterPartyDetails;

  getCounterPartyDetails1: counterPartyDetailsData[] = counterPartyDetails1;

  constructor(private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.showCase = this.activate.snapshot.params['case'];
  }

}
