import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/ProductService";
import {Product} from "../../model/Product";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  id: any;
  product: Product | undefined;
  products: Product[] = [];
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id);
  }


}
