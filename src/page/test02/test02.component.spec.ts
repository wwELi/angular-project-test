/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Test02Component } from './test02.component';

describe('Test02Component', () => {
  let component: Test02Component;
  let fixture: ComponentFixture<Test02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
