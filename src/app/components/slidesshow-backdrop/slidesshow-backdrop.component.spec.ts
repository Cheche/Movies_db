import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesshowBackdropComponent } from './slidesshow-backdrop.component';

describe('SlidesshowBackdropComponent', () => {
  let component: SlidesshowBackdropComponent;
  let fixture: ComponentFixture<SlidesshowBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesshowBackdropComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesshowBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
