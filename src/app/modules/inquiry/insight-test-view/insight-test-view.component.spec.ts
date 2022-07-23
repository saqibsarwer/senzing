import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightTestViewComponent } from './insight-test-view.component';

describe('InsightTestViewComponent', () => {
  let component: InsightTestViewComponent;
  let fixture: ComponentFixture<InsightTestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightTestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
