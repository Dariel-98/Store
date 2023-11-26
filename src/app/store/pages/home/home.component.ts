import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  cols: number = 3;
  category: string = '';

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
