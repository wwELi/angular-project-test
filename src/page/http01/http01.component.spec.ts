/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Http01Component } from './http01.component';

describe('Http01Component', () => {
  let component: Http01Component;
  let fixture: ComponentFixture<Http01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
