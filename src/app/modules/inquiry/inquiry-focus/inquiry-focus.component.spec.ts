import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryFocusComponent } from './inquiry-focus.component';

describe('InquiryFocusComponent', () => {
  let component: InquiryFocusComponent;
  let fixture: ComponentFixture<InquiryFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
