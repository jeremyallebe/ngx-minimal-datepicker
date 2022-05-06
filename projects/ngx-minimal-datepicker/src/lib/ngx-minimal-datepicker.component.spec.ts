import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMinimalDatepickerComponent } from './ngx-minimal-datepicker.component';

describe('NgxMinimalDatepickerComponent', () => {
  let component: NgxMinimalDatepickerComponent;
  let fixture: ComponentFixture<NgxMinimalDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMinimalDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMinimalDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
