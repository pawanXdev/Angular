import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforNgifBindingComponent } from './ngfor-ngif-binding.component';

describe('NgforNgifBindingComponent', () => {
  let component: NgforNgifBindingComponent;
  let fixture: ComponentFixture<NgforNgifBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforNgifBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforNgifBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
