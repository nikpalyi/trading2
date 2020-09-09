import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../services/trade.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public trades;

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.getTrades();
  }

  getTrades() {
    this.tradeService.getTrades().subscribe(
      data => { this.trades = data},
      err => console.error(err),
      () => console.log('trades loaded')
    );
  }

}
