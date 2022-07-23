import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightTestedrecentlyComponent } from './insight-tested-recently.component';

describe('InsightTestedrecentlyComponent', () => {
  let component: InsightTestedrecentlyComponent;
  let fixture: ComponentFixture<InsightTestedrecentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightTestedrecentlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightTestedrecentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
