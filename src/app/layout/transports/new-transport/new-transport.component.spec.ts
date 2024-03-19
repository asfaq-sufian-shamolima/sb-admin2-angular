import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransportComponent } from './new-transport.component';

describe('NewTransportComponent', () => {
  let component: NewTransportComponent;
  let fixture: ComponentFixture<NewTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTransportComponent]
    });
    fixture = TestBed.createComponent(NewTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
