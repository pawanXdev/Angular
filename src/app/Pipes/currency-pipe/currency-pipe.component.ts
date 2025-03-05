import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  imports: [],
  templateUrl: './currency-pipe.component.html',
  styleUrl: './currency-pipe.component.css'
})
export class CurrencyPipeComponent {
  price = 12345.6789;
}
