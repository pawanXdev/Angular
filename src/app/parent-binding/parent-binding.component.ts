import { Component } from '@angular/core';
import { ChildBindingComponent } from '../child-binding/child-binding.component';

@Component({
  selector: 'app-parent-binding',
  standalone: true,  // Ensure it's a standalone component
  imports: [ChildBindingComponent],  // Import the child component here
  templateUrl: './parent-binding.component.html',
  styleUrls: ['./parent-binding.component.css']
})
export class ParentBindingComponent {
  userName: string = "Pawan Shukla";
}
