import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() toggleSidenav = new EventEmitter<void>();

  @Output() sidenavToggle: EventEmitter<string> = new EventEmitter<string>();

  sort: string = 'descending';
  itemsShowCount: number = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemsUpdated(count: number) {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }
  onClomunsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum);
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit('sidenav.toggle()');
    console.log('evento emitido');
  }
}
