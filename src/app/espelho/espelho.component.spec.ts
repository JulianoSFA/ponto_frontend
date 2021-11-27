import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspelhoComponent } from './espelho.component';

describe('EspelhoComponent', () => {
  let component: EspelhoComponent;
  let fixture: ComponentFixture<EspelhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspelhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
