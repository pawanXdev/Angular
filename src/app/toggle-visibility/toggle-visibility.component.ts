import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-toggle-visibility',
  standalone: true, // ✅ Mark as a standalone component
  imports: [CommonModule], // ✅ Add CommonModule to imports
  templateUrl: './toggle-visibility.component.html',
  styleUrls: ['./toggle-visibility.component.css']
})
export class ToggleVisibilityComponent {
  isVisible = false;
  isSpecial = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
}
