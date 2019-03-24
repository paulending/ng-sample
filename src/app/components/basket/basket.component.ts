import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/services/products.service';
import { Store, select } from '@ngrx/store';
import { BasketState } from 'src/app/store/basket.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  products$: Observable<Products[]>;

  constructor(private store: Store<BasketState>) {
    this.products$ = store.pipe(select('products'));
  }

  ngOnInit() {
    console.log(this.products$);
  }
}
