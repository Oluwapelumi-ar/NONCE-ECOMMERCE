import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;

  constructor(private cartSrv: CartService) { }

  ngOnInit(): void {
  this.cartSrv.getProducts().subscribe(res => {
    this.products = res;
    this.grandTotal = this.cartSrv.getTotalPrice();
  })
  }
  removeItem(item:any){
    this.cartSrv.removeCartItem(item);
  }
  emptyCart(){
    this.cartSrv.removeAllCart()
  }




}
