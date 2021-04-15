import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectuiComponent } from './multiselectui.component';

describe('MultiselectuiComponent', () => {
  let component: MultiselectuiComponent;
  let fixture: ComponentFixture<MultiselectuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
