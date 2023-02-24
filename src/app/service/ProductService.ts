import {Injectable} from '@angular/core';
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1, "Người yêu Mạnh", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg", 300),
    new Product(2, "Người yêu Sơn", "https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg", 310)
  ]

  constructor() {
  }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  editProduct(id: number, product: Product): void {
    this.products.splice(this.findIndexById(id), 1, product)
  }

  deleteProduct(id: number): void {
    let index = this.findIndexById(id);
    this.products.splice(index, 1);
  }

  findIndexById(id: number): any {

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
  }


  findById(id: number): Product | undefined {
    return this.products.find(p => p.id = id);

    // for (const p of this.products) {
    //   if (p.id == id){
    //     return p;
    //   }
    // }
    // return undefined;
  }


}
