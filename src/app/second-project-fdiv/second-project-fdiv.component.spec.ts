import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProjectFdivComponent } from './second-project-fdiv.component';

describe('SecondProjectFdivComponent', () => {
  let component: SecondProjectFdivComponent;
  let fixture: ComponentFixture<SecondProjectFdivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondProjectFdivComponent]
    });
    fixture = TestBed.createComponent(SecondProjectFdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
