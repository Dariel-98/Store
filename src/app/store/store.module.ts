import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent],
})
export class StoreModule {}
