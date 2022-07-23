import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightTransactionDetailsComponent } from './insight-transaction-details.component';

describe('InsightTransactionDetailsComponent', () => {
  let component: InsightTransactionDetailsComponent;
  let fixture: ComponentFixture<InsightTransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightTransactionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightTransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
