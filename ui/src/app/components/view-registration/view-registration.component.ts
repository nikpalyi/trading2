import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../services/trade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public tradeReg;

  constructor(private tradeService: TradeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTradeReg(this.route.snapshot.params.id);
  }

  getTradeReg(id:number) {
    this.tradeService.getTrade(id).subscribe(
      data => {
        this.tradeReg = data;
      },
      err => console.error(err),
      () => console.log('trades loaded')
    );
  }

}
