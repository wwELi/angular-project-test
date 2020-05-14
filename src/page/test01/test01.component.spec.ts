/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Test01Component } from './test01.component';

describe('Test01Component', () => {
  let component: Test01Component;
  let fixture: ComponentFixture<Test01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
