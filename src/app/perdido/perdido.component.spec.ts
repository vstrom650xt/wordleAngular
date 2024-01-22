/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerdidoComponent } from './perdido.component';

describe('PerdidoComponent', () => {
  let component: PerdidoComponent;
  let fixture: ComponentFixture<PerdidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
