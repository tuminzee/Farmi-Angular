import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerproductsComponent } from './farmerproducts.component';

describe('FarmerproductsComponent', () => {
  let component: FarmerproductsComponent;
  let fixture: ComponentFixture<FarmerproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
