import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProjectSdivComponent } from './first-project-sdiv.component';

describe('FirstProjectSdivComponent', () => {
  let component: FirstProjectSdivComponent;
  let fixture: ComponentFixture<FirstProjectSdivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstProjectSdivComponent]
    });
    fixture = TestBed.createComponent(FirstProjectSdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
