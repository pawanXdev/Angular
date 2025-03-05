import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";

  receivedMessage = '';

  // This method will handle the event emitted from the child
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

}
