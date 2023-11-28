import {
  AfterContentChecked,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  cols: number = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort: string = 'desc';
  count: string = '12';
  productsSubscription: Subscription | undefined;

  openSidenav: boolean = false;

  constructor(
    private cartService: CartService,
    private storeService: StoreService,
    private breakpointObserver: BreakpointObserver
  ) {
    if (this.openSidenav === true) {
      setInterval(() => {
        this.openSidenav = !this.openSidenav;
      }, 10);
      console.log('Constructor');
    }
  }

  ngOnInit(): void {
    this.getProducts();

    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
      ])
      .subscribe(() => {});
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  onItemsCountChange(newcount: number): void {
    this.count = newcount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  calculateCols(): number {
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      return 1; // Una columna para pantallas extra pequeñas
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      return 1; // Una columna para pantallas pequeñas
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      return 2; // Dos columnas para pantallas medianas
    } else {
      return 3; // Tres columnas para pantallas grandes
    }
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  toggleSidenav() {
    this.openSidenav = !this.openSidenav;
    setTimeout(() => {
      this.openSidenav = !this.openSidenav;
    }, 4000);
  }
}
