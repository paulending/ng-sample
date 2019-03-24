import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() priceMin: number;
  @Input() priceMax: number;

  @Output() priceMinChange: EventEmitter<any> = new EventEmitter();
  @Output() priceMaxChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeMinPrice(): void {
    this.priceMinChange.emit(this.priceMin);
  }
  changeMaxPrice(): void {
    this.priceMaxChange.emit(this.priceMax);
  }
}
