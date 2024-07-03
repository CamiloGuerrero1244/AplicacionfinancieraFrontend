import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityListComponent } from './liability-list.component';

describe('LiabilityListComponent', () => {
  let component: LiabilityListComponent;
  let fixture: ComponentFixture<LiabilityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiabilityListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiabilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
