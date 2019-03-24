import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Store } from '@ngrx/store';
import { BasketState } from 'src/app/store/basket.state';
import { Add } from 'src/app/store/basket.actions';

// Box component shows basic information about product
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() product: Product;

  constructor(private store: Store<BasketState>) { }

  ngOnInit() {
  }

  addToBasket(product: Product) {
    console.log(product);
    this.store.dispatch(new Add(product));
  }
}
