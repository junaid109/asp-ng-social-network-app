/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikedListComponent } from './liked-list.component';

describe('LikedListComponent', () => {
  let component: LikedListComponent;
  let fixture: ComponentFixture<LikedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
