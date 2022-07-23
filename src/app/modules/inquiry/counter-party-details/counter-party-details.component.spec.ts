import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPartyDetailsComponent } from './counter-party-details.component';

describe('CounterPartyDetailsComponent', () => {
  let component: CounterPartyDetailsComponent;
  let fixture: ComponentFixture<CounterPartyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPartyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPartyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
