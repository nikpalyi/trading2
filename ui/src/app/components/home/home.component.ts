import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../services/trade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tickers: string[] = [
    'Wipro',
    'INFY',
    'TCS',
    'ARTL',
    'LT'
  ];
  tradeform: FormGroup;
  validMessage: string = "";

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.tradeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {

    if (this.tradeform.valid) {
      this.validMessage = "Your Trade order has been submitted. Thank you!";
      this.tradeService.createTradeRegistration(this.tradeform.value).subscribe(
        data => {
          this.tradeform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
