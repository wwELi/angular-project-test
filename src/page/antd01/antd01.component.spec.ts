/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Antd01Component } from './antd01.component';

describe('Antd01Component', () => {
  let component: Antd01Component;
  let fixture: ComponentFixture<Antd01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Antd01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Antd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
