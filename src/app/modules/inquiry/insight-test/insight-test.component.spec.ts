import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightTestComponent } from './insight-test.component';

describe('InsightTestComponent', () => {
  let component: InsightTestComponent;
  let fixture: ComponentFixture<InsightTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
