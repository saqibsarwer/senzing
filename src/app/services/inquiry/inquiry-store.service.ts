import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  jsonData,
  deogatoryJson,
  detailsData,
  insightData,
  transaction,
  derogatory,
  insightstest,
  materially,
  testChange,
  testView,
  iqrhistory,
  quartile
} from 'src/app/interfaces/inquiry-details';
import { BaseStoreService } from '../base-store';

@Injectable({
  providedIn: 'root'
})
export class InquiryStoreService extends BaseStoreService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  // getProducts(): Observable<Products[]> {
  //   return this.httpClient.get<Products[]>('api/products');
  // }

  getJsonData(): Observable<jsonData[]> {
    return this.httpClient.get<jsonData[]>('api/jsonData');
  }

  // getNonEscalated(): Observable<NonEscalated[]> {
  //   return this.httpClient.get<NonEscalated[]>('api/nonEscalated');
  // }

  // getFalsePositive(): Observable<FalsePositive[]> {
  //   return this.httpClient.get<FalsePositive[]>('api/falsePositive');
  // }

  // getDergo(): Observable<Dergo[]> {
  //   return this.httpClient.get<Dergo[]>('api/dergo');
  // }

  // getOthers(): Observable<Others[]> {
  //   return this.httpClient.get<Others[]>('api/others');
  // }

  // getCounterPartyDetails(): Observable<CounterPartyDetails[]> {
  //   return this.httpClient.get<CounterPartyDetails[]>(
  //     'api/counterPartyDetails'
  //   );
  // }

  // getInquiryDetails(id: number): Observable<InquiryDetails> {
  //   return this.httpClient.get<InquiryDetails>('api/inquiry_details?id=' + id);
  // }

  // getSameAsFocusDetails(): Observable<SameAsFocusDetails[]> {
  //   return this.httpClient.get<SameAsFocusDetails[]>('api/sameAsFocusDetails');
  // }

  // getRelatedToFocusDetails(): Observable<RelatedToFocusDetails[]> {
  //   return this.httpClient.get<RelatedToFocusDetails[]>(
  //     'api/relatedToFocusDetails'
  //   );
  // }

  // getFocusLevelRiskDetails(): Observable<FocusLevelRiskDetails[]> {
  //   return this.httpClient.get<FocusLevelRiskDetails[]>(
  //     'api/focusLevelRiskDetails'
  //   );
  // }

  // getNetworkRiskDetails(): Observable<NetworkRiskDetails[]> {
  //   return this.httpClient.get<NetworkRiskDetails[]>('api/networkRiskDetails');
  // }

  // getTestedRecentlyData(): Observable<TestedRecently[]> {
  //   return this.httpClient.get<TestedRecently[]>('api/TestedRecentlyData');
  // }

  // getB2bData(): Observable<B2bDate[]> {
  //   return this.httpClient.get<B2bDate[]>('api/b2bDateTable');
  // }

  // getEligibleData(): Observable<EligibleDate[]> {
  //   return this.httpClient.get<EligibleDate[]>('api/eligible_date');
  // }

  // getIqrData(): Observable<IqrData[]> {
  //   return this.httpClient.get<IqrData[]>('api/iqr_data');
  // }

  // getThirdQuarData(): Observable<ThirdQuarData[]> {
  //   return this.httpClient.get<ThirdQuarData[]>('api/third_quar_data');
  // }
}
