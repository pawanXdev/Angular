import { Component } from '@angular/core';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ParentBindingComponent } from './parent-binding/parent-binding.component';
import { NgforNgifBindingComponent } from './ngfor-ngif-binding/ngfor-ngif-binding.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { ToggleVisibilityComponent } from './toggle-visibility/toggle-visibility.component';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EventBindingComponent,
    TwoWayBindingComponent,
    PropertyBindingComponent,
    ParentBindingComponent,
    NgforNgifBindingComponent,
    ReactiveFormValidationComponent,
    ToggleVisibilityComponent,
    PaginationExampleComponent,
    ModalDialogComponent // Import ModalDialogComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Basics';
}
