import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-binding',
  templateUrl: './child-binding.component.html',
  styleUrls: ['./child-binding.component.css']
})
export class ChildBindingComponent {
  @Input() userName: string = '';  // Ensure @Input is used
}
