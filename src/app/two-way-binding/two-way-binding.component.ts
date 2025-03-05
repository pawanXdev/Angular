import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],  // ✅ Add FormsModule here
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  name: string = '';
}
