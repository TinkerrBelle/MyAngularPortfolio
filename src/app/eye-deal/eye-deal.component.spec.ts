import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeDealComponent } from './eye-deal.component';

describe('EyeDealComponent', () => {
  let component: EyeDealComponent;
  let fixture: ComponentFixture<EyeDealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeDealComponent]
    });
    fixture = TestBed.createComponent(EyeDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
