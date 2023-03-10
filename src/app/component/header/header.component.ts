import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;

  constructor(private cartSrv:CartService) { }

  ngOnInit(): void {
    this.cartSrv.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }

}
