import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AsideComponent } from './components/aside/aside.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    AsideComponent,
    CarouselComponent,
    ProductComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarouselComponent,
  ]
})
export class ProductsModule { }
