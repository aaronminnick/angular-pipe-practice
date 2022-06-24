import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  
  example = {
    foo: 5,
    bar: 'test',
    who: {
      name: 'Aaron',
      likes: 'pizza'
    }
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }
}
