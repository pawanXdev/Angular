import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverHighlightComponent } from './hover-highlight.component';

describe('HoverHighlightComponent', () => {
  let component: HoverHighlightComponent;
  let fixture: ComponentFixture<HoverHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
