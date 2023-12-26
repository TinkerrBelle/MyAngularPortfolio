import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProjectSdivComponent } from './second-project-sdiv.component';

describe('SecondProjectSdivComponent', () => {
  let component: SecondProjectSdivComponent;
  let fixture: ComponentFixture<SecondProjectSdivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondProjectSdivComponent]
    });
    fixture = TestBed.createComponent(SecondProjectSdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
