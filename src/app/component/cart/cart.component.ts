import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any = [];
  public grandTotal !: number;

  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {
  this.cartSrv.getProducts().subscribe(res => {
    this.product = res;
    this.grandTotal = this.cartSrv.getTotalPrice();
  })

  }

}
