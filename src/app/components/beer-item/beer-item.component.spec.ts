import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerItemComponent } from './beer-item.component';

describe('BeerItemComponent', () => {
  let component: BeerItemComponent;
  let fixture: ComponentFixture<BeerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerItemComponent]
    });
    fixture = TestBed.createComponent(BeerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
