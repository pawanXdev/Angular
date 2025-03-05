import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-ngfor-ngif-binding',
  standalone: true, // ✅ Make it standalone
  imports: [CommonModule], // ✅ Import CommonModule
  templateUrl: './ngfor-ngif-binding.component.html',
  styleUrls: ['./ngfor-ngif-binding.component.css']
})
export class NgforNgifBindingComponent {
  items: string[] = ['Apple', 'Banana', 'Cherry'];  // Define the items array
  isLoggedIn: boolean = true;  // Define the isLoggedIn variable
}
