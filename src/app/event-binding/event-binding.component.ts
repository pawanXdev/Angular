import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  message = 'Click the button to trigger an event!';

  onButtonClick() {
    this.message = 'Button Clicked!';
  }
}
