import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  imports: [],
  templateUrl: './ng-if-directive.component.html',
  styleUrl: './ng-if-directive.component.css'
})
export class NgIfDirectiveComponent {

  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
