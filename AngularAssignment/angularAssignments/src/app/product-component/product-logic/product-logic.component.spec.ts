import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLogicComponent } from './product-logic.component';

describe('ProductLogicComponent', () => {
  let component: ProductLogicComponent;
  let fixture: ComponentFixture<ProductLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
