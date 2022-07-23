import { Component, OnInit } from '@angular/core';
import inquiryFocusData from '../../../json/insight_CM32012U5267/Focus Details/inqiry-focus.json';
import possibleRelated from '../../../json/insight_CM32012U5267/Focus Details/inquiry-possibleRelatedFocus.json';
import focusLevel from '../../../json/insight_CM32012U5267/Focus Details/inqiry-focusLevelRisk.json';
import networkRisk from '../../../json/insight_CM32012U5267/Focus Details/inquiry-networkRisk.json';
import {PageEvent} from '@angular/material/paginator';
interface inquiryFocusData {
  entityType: String;
  acNo: String;
  names: String;
  address: String;
}
interface possibleRelated {
  product: String;
  acNo: String;
  names: String;
  address: String;
  tenure: String;
}
interface focusLevel {
  risk: String;
  details: String;
  date: String;
  updated: String;
  new: String;
}
interface networkRisk {
  entity: String;
  acNo: String;
  riskReason: String;
  role: String;
  relation: String;
  date: String;
  new: String;
}

@Component({
  selector: 'app-inquiry-focus',
  templateUrl: './inquiry-focus.component.html',
  styleUrls: ['./inquiry-focus.component.scss']
})
export class InquiryFocusComponent implements OnInit {
  inquiryFocusData: any = [];
  getinquiryFocus: inquiryFocusData[] = inquiryFocusData;

  possibleRelated : any = [];
  getpossibleRelated : possibleRelated[] = possibleRelated;

  focusLevel : any = [];
  getfocusLevel : focusLevel[] = focusLevel;

  networkRisk: any = [];
  getnetworkRisk : networkRisk[] = networkRisk;

  constructor() { }

  ngOnInit(): void {
  }

}
