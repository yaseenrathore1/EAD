import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbServiceComponent } from './emb-service.component';

describe('EmbServiceComponent', () => {
  let component: EmbServiceComponent;
  let fixture: ComponentFixture<EmbServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmbServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
