import { Component, OnInit } from '@angular/core';
import increaseQuality from '../../../json/home-IQcasework.json';
import aeAnalysis from '../../../json/home-aeAnalysis.json';
import userProgress from '../../../json/home-userProgress.json';
interface jsonData {
  month: String;
  country: String;
  cases: String;
  stdProcessTransPairToReview: String;
  recommendedTransPairTo: String;
  mTransPairTo: String;
  ofNewParisincluded: String;
  rescarDiscover: String;
  otherActionTaken: String;
  isRecsar: String;
  image: String;
  isAction: String;
}
interface ae {
  month: String;
  country: String;
  desk: String;
  totalCases: String;
  averageTime: String;
  totalTime: String;
  timeTestedCases: String;
  totalActualTime: String;
  averageTimeCase: String;
  timeSavingCase: String;
  saved: String;
  isDesk: String;
  isActual: String;
  comments: String;
}
interface user {
 
  userName: String;
  designation: String;
  image: String;
  quality: String;
  time: String;
  valueArrow: String;
  value: String;
  valueClass: String;
  averageTime: String;
  daysLeft: String;
  percent: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  increaseQuality: any = [];
  getincreaseQuality: jsonData[] = increaseQuality;

  aeAnalysis: any = [];
  getaeAnalysis: ae[] = aeAnalysis;  

  userProgress: any = [];
  getuserProgress: user[] = userProgress;

  constructor() { }

  ngOnInit(): void { }
}
