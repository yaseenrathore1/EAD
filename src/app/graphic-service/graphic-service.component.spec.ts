import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicServiceComponent } from './graphic-service.component';

describe('GraphicServiceComponent', () => {
  let component: GraphicServiceComponent;
  let fixture: ComponentFixture<GraphicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
