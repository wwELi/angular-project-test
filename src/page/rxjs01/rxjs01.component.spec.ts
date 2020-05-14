/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rxjs01Component } from './rxjs01.component';

describe('Rxjs01Component', () => {
  let component: Rxjs01Component;
  let fixture: ComponentFixture<Rxjs01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rxjs01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rxjs01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
