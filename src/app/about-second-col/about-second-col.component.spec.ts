import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSecondColComponent } from './about-second-col.component';

describe('AboutSecondColComponent', () => {
  let component: AboutSecondColComponent;
  let fixture: ComponentFixture<AboutSecondColComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSecondColComponent]
    });
    fixture = TestBed.createComponent(AboutSecondColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
