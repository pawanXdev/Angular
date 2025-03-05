import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperAndLowerCasePipesComponent } from './upper-and-lower-case-pipes.component';

describe('UpperAndLowerCasePipesComponent', () => {
  let component: UpperAndLowerCasePipesComponent;
  let fixture: ComponentFixture<UpperAndLowerCasePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperAndLowerCasePipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperAndLowerCasePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
