import { Component, OnInit } from '@angular/core';
import detailsData from '../../../json/details.json';
// import data from '../../../json/data.json';
interface detailsData {
  entityType: String;
  CustomerNo: String
  accountNo: String;
  name: String;
  address: String;
  openDate: String;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // selectedDay: string = '';
  // selectChangeHandler (event: any) {
  //   //update the ui
  //   this.selectedDay = event.target.value;
  // }

  // data:any = [];
  // detailsData:any;

  detailsData: any = [];
  getDetailsData: detailsData[] = detailsData;

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

  constructor() { }

  ngOnInit(): void {
    // this.jsonRecursive(data, "")
    // this.detailsData = data.details;
    //  console.log(data.home);
  }

}
