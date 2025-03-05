import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  imports: [],
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.css'
})
export class DatePipeComponent {

    currentDate = new Date();
  
}
