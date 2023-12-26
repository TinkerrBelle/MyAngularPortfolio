import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFirstColComponent } from './about-first-col.component';

describe('AboutFirstColComponent', () => {
  let component: AboutFirstColComponent;
  let fixture: ComponentFixture<AboutFirstColComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFirstColComponent]
    });
    fixture = TestBed.createComponent(AboutFirstColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
