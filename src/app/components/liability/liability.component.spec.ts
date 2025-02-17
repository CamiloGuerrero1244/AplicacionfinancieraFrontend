import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityComponent } from './liability.component';

describe('LiabilityComponent', () => {
  let component: LiabilityComponent;
  let fixture: ComponentFixture<LiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
