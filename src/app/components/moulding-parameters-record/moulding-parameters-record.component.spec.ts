import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldingParametersRecordComponent } from './moulding-parameters-record.component';

describe('MouldingParametersRecordComponent', () => {
  let component: MouldingParametersRecordComponent;
  let fixture: ComponentFixture<MouldingParametersRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouldingParametersRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouldingParametersRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
