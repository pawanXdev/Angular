import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingMultiplePipesComponent } from './chaining-multiple-pipes.component';

describe('ChainingMultiplePipesComponent', () => {
  let component: ChainingMultiplePipesComponent;
  let fixture: ComponentFixture<ChainingMultiplePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainingMultiplePipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChainingMultiplePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
