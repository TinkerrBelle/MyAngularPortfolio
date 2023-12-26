import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProjectFdivComponent } from './first-project-fdiv.component';

describe('FirstProjectFdivComponent', () => {
  let component: FirstProjectFdivComponent;
  let fixture: ComponentFixture<FirstProjectFdivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstProjectFdivComponent]
    });
    fixture = TestBed.createComponent(FirstProjectFdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
