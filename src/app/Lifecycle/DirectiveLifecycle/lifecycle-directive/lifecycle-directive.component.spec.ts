import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleDirectiveComponent } from './lifecycle-directive.component';

describe('LifecycleDirectiveComponent', () => {
  let component: LifecycleDirectiveComponent;
  let fixture: ComponentFixture<LifecycleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
