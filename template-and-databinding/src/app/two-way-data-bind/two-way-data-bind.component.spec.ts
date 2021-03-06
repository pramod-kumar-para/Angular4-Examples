import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindComponent } from './two-way-data-bind.component';

describe('TwoWayDataBindComponent', () => {
  let component: TwoWayDataBindComponent;
  let fixture: ComponentFixture<TwoWayDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
