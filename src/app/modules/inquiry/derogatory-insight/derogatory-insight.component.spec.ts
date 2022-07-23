import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerogatoryInsightComponent } from './derogatory-insight.component';

describe('DerogatoryInsightComponent', () => {
  let component: DerogatoryInsightComponent;
  let fixture: ComponentFixture<DerogatoryInsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerogatoryInsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerogatoryInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
