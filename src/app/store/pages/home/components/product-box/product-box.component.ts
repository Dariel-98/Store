import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/store/interfaces/product.interface';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Sneakers',
    price: 150,
    category: 'shoes',
    description: 'Description',
    image: 'https://fakeimg.pl/150x150',
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
