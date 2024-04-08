import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VecServiceComponent } from './vec-service.component';

describe('VecServiceComponent', () => {
  let component: VecServiceComponent;
  let fixture: ComponentFixture<VecServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VecServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VecServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
