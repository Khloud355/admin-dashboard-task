import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticCardComponent } from './analytic-card.component';

describe('AnalyticCardComponent', () => {
  let component: AnalyticCardComponent;
  let fixture: ComponentFixture<AnalyticCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticCardComponent]
    });
    fixture = TestBed.createComponent(AnalyticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
