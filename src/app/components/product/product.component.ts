import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  currentCategory:Product;
  filterText = '';

  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategoryId(params['categoryId']);
      } else {
        this.getAllProducts();
      }
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
  getProductsByCategoryId(categoryId: number) {
    this.productService
      .getProductByCategoryId(categoryId)
      .subscribe((response) => {
        this.products = response.data;
      });
  }

  addToCart(product: Product) {
   if (product.categoryId === 1) {
    this.toastrService.error("Hata"," Bu ürün eklenemez")
   } else {
    this.toastrService.success("Sepete Eklendi", product.productName);
    this.cartService.addToCart(product);
   }

   
  }
}
