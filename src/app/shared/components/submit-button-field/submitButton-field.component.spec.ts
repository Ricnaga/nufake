import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonFieldComponent } from './submitButton-field.component';

describe('SubmitButtonFieldComponent', () => {
  let component: SubmitButtonFieldComponent;
  let fixture: ComponentFixture<SubmitButtonFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitButtonFieldComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitButtonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
