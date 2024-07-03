import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityCreateComponent } from './liability-create.component';

describe('LiabilityCreateComponent', () => {
  let component: LiabilityCreateComponent;
  let fixture: ComponentFixture<LiabilityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiabilityCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiabilityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
