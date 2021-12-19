import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContactManagerComponent } from './list-contact-manager.component';

describe('ListContactManagerComponent', () => {
  let component: ListContactManagerComponent;
  let fixture: ComponentFixture<ListContactManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContactManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContactManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
