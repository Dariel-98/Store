import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();

  sort: string = 'desc';
  itemsShowCount: number = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
  }
  onClomunsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum);
  }
}
